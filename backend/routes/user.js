const { Router } = require("express");
const { User, Account } = require("../db");
const jwt=require("jsonwebtoken");
const zod=require("zod");
const JWT_SECRET_KEY=require("../config");
const { authMidleware } = require("../middleware/auth");

const router=Router();

const signupSchema=zod.object({
    firstname:zod.string(),
    lastname:zod.string(),
    password:zod.string(),
    username:zod.string(),
})

router.post("/signup",async(req,res)=>{

    const body=req.body;
    const {success}=signupSchema.safeParse(body);
    if(!success)
        {
           return res.status(411).json({
                msg:"Email already taken/invalid inputs"
            })
        }

        const user = await User.findOne({username:body.username});
        console.log("fff",user) 
        if(user)
            {
                return res.status(411).json({
                    msg:"User already exists"
                })
            }

            const dbUser= await User.create({
                    firstname:body.firstname,
                    lastname:body.lastname,
                    password:body.password,
                    username:body.username
})
            const userId=dbUser._id;

            await Account.create({
                userId,
                balance:1+Math.random()*10000
            })
            const token=jwt.sign({userId},JWT_SECRET_KEY);

                res.json({
                    msg:"user created successfully",
                    token:token
                })
            
            })

router.post("/signin",async(req,res)=>{
    const{username,password}=req.body

    const user=await User.findOne({username});

    if(user){
        if(user.password===password){
            const token=jwt.sign({userId:user._id},JWT_SECRET_KEY);
            return res.json({
                msg: "User logged in successfully",
                token
            })
        }
        else{
            return res.status(401).json({ errMsg: "Invalid Password!" });
        }
    }
    else{
        res.json({
            msg:"User doesn't exist/Invalid username"
        })
    }
})  

const updateBody=zod.object({
    password:zod.string(),
    firstname:zod.string(),
    lastname:zod.string()
})

router.get("/user",authMidleware,async(req,res)=>{
    console.log("dddd",req.userId)
    const user= await User.findById(req.userId);
    console.log("fff",user)
    console.log("fff",user.username)
    res.json({
        msg:"user info",
        user
    })
})
router.put("/update",authMidleware,async(req,res)=>{
    const data=updateBody.safeParse(req.body);
    // console.log("sss"),console.log("dd",data)
    if(!data.success) {
        return res.status(411).json("Invalid data/Error while updating information")
      } 
    try {
        const updatedUser = await User.findByIdAndUpdate(req.userId, data.data);
        // const updatedUser=await User.updateOne({userId:req.userId,data:data.data})--not working
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ msg: "Information updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.get("/bulk",async (req,res)=>{
    const filter=req.query.filter || "";
    const users=await User.find({
        $or:[{
            firstname:{
                "$regex":filter
            }
        },{
            lastname:{
                "$regex":filter
            }
        }]
    })

    res.json({
        user:users.map(user =>({
            username: user.username,
            firstname:user.firstname,
            lastname:user.lastname,
            _id:user._id
        }))
    })

})
module.exports=router