const { Router } = require("express");
const router = Router();
const userRouter=require("./user")
const accountRouter=require("./account")

router.use("/user",userRouter);
router.use("/account",accountRouter)

module.exports=router;


// {
//     "password":"RISHI-USER",
//     "firstname":"RISHI",
//     "lastname":"GUPTA"
   
// }

// {
//     "username":"RISHI-USER",
//     "password":"RISHI-USER"
   
// }