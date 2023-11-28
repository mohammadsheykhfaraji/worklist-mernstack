const mongoose=require("mongoose");

const user=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },  
    password:{
        type:String,
        required:true,
        trim:true,
    },


});


module.exports=mongoose.model('user',user);