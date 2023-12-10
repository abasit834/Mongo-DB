const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    email :{
    type: String,
    lowercase: true,
    required:true
    },
    password: {
        type:String,
        required:true
    }
});

const UserModel=mongoose.model("Login",UserSchema);

module.exports=UserModel;