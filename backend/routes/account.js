const express=require ("express");
const { authMidleware } = require("../middleware/auth");
const { Account, User } = require("../db");
const mongoose=require('mongoose');
const router=express.Router();

router.post("/addmoney",authMidleware,async(req,res)=>{
    const{balance}=req.body;
    await Account.create({userId:req.userId,balance});
    res.json({
        msg:"money added successfully"
    })

})

router.put("/updatebalance",authMidleware,async(req,res)=>{
    const{balance}=req.body;
    await Account.updateOne({userId:req.userId,balance})
    
    res.json({
        msg:`money updated successfully and the balance is ${balance}`
    })
})

router.get("/balance",authMidleware,async(req,res)=>{

    const account=await Account.findOne({userId:req.userId});
    res.json({
        balance:account.balance
    })
})

// function hii(){-----------------------bad way of handling transfer route
// // router.post("/transfer",authMidleware,async(req,res)=>{ --------------bad way of handling
// //     const {amount,to}=req.body;

// //     const account=await Account.findOne({userId:req.userId});

// //     if(amount>account.balance){
// //         res.status(400).json({
// //             msg:"Insufficient balance"
// //         })
// //     }
// //     const toAccount=await Account.findOne({
// //         userId:to
// //     })

// //     if(!toAccount){
// //         res.status(400).json({
// //             msg:"This Account doesn't exist in our database"
// //         })
// //     }

// //     await Account.updateOne({
// //         userId:req.userId
// //     },{
// //         $inc:{
// //             balance:-amount
// //         }
// //     })

// //     await Account.updateOne({
// //         userId:to
// //     },{
// //         $inc:{
// //             balance:amount
// //         }
// //     })
// //     res.json({
// //         msg:"Transfer Successfull"
// //     })

// // });
// }

router.post("/transfer",authMidleware,async(req,res)=>{           //--good way of handling transfer route

    const session=await mongoose.startSession();

    session.startTransaction();

    const{to,amount}=req.body;
    if (!amount || isNaN(amount) || amount <= 0) {
        return res.status(400).json({ error: "Invalid amount" });
    }

    const account=await Account.findOne({userId:req.userId}).session(session);

    if(!account || account.balance<amount){
        await session.abortTransaction();
        res.status(400).json({
            msg:"Insufficient Balance"
        })
    }
    const toAccount=await Account.findOne({userId:to}).session(session);
    if(!toAccount){
        await session.abortTransaction();
        res.status(400).json({
            msg:"Account doesn't exist"
        })
    }

    await Account.updateOne({userId:req.userId} , {$inc: {balance:-amount } } ).session(session)
    await Account.updateOne({userId:to}, {$inc:{balance: amount} } ).session(session)

    await session.commitTransaction();

    res.json({
        msg:"Transaction Successfully Completed"
    })
})


module.exports=router;