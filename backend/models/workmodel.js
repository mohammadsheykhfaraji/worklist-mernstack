const mongoose=require("mongoose");

const workschema=new mongoose.Schema({
title:{
    type:String,
    required:true,
    trim:true,
}

});


module.exports=mongoose.model('work',workschema);