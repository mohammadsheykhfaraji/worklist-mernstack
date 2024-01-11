const mongoose=require("mongoose");

const workschema=new mongoose.Schema({
    work:{
        type:String,
        required:true,
        trim:true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, 
    },

});

workschema.statics.workvalidation = function (body) {
    return schema.validate(body, { abortEarly: false });
};

module.exports=mongoose.model('Work',workschema); 