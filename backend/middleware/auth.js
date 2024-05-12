const JWT_SECRET_KEY=require("../config");
const jwt = require('jsonwebtoken');


const authMidleware=(req,res,next)=>{
    // console.log("Request Headers:", req.headers);
  const authHeader=req.headers.authorization;
  // console.log("fffff",authHeader)
  if(!authHeader || !authHeader.startsWith('Bearer')){
    return res.status(401).send({error:"You are not logged in!"});
  }
  const token=authHeader.split(' ')[1];
  // console.log("hiii",token)

  try{
    const decoded=jwt.verify(token,JWT_SECRET_KEY);
    // console.log("kkkk",decoded)
    if(decoded.userId){
        req.userId=decoded.userId;
        // console.log("ggg",req.userId)
    next();
    }
    else{
        return res.status(403).json({})
    }
    
  }catch(e){
    return res.status(403).json({})
  }
}

module.exports={authMidleware};