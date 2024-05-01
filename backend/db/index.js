const mongoose=require('mongoose');

const uri="mongodb+srv://Rishhiiii27:rishi27@cluster0.uecy5na.mongodb.net/course_sellingapp_3";
mongoose.connect(uri);
const schema=mongoose.Schema;

// const UserSchema=new schema({
//     first_name:{
//         type:String,
//         required:true
//     },
//     last_name:{
//         type:String,
//         required:true
//     },
//     username:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:String
//     }
// })

const UserSchema=new schema({
    firstname:String,
    lastname:String,
    password:String,
    username:String
})



const User=mongoose.model( "User", UserSchema );

module.exports={User}