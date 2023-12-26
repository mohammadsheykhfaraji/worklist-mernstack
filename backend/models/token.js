const mongoose=require("mongoose");


const tokenschema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      accessToken: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        expires: 6 * 60 * 60, // 6 hours
      },
   
});

module.exports=mongoose.model('Token',tokenschema);