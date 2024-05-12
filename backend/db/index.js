const mongoose=require('mongoose');

const uri="mongodb+srv://Rishhiiii27:rishi27@cluster0.uecy5na.mongodb.net/paytm";
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
    // firstname:String,
    // lastname:String,
    // password:String,
    // username:String
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstname:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    }
})

const AccountSchema=new schema({
    userId:{
        type:schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})



const User=mongoose.model( "User", UserSchema );
const Account=mongoose.model("Account",AccountSchema);

module.exports={User,Account}