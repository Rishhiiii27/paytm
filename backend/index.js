const express = require("express");
const app=express();

app.get("/",(req,res)=>{
    console.log("hii");
    res.send("hello");
})

app.listen(3000,()=>{
    console.log("hii from server")
})

