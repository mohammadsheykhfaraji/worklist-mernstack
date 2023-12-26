const mongoose=require("mongoose");
const bycrpt=require('bcryptjs');
const {schema}=require('./secure/userValidation');

const userschema=new mongoose.Schema({
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
        maxlenth:255,
        minlenth:4,
        trim:true,
    },
    createdate:{
        type:Date,
        default:Date.now,
    },
    role:{
        type:Number,
        default:0
    }


});

userschema.statics.userValidation = function (body) {
    return schema.validate(body, { abortEarly: false });
};

userschema.pre("save",function(next){
    let user=this;

    if(user.isModified("password")){
        bycrpt.hash(user.password,10,(err,hash)=>{
            if(err){
                return next(err);
            }
            user.password=hash;
            next();

        });
    }else{
        return next();
    }

});

module.exports=mongoose.model('User',userschema);