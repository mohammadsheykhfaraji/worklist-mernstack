const User=require('../models/user');
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");//////////for token create
// const {expressjwt}=require('express-jwt');////for auth

exports.signin=async(req,res)=>{
    try {
        const{email,password}=req.body;
        const user= await User.findOne({email:email});
        
    if(user){
      const isEqual = await bcrypt.compare(password, user.password);
      
      if (isEqual) {
       
          const token = jwt.sign(
              {
                  user: {
                      userId: user._id.toString(),
                      email: user.email,
                      fullname: user.fullname,
                      role:user.role,
                  },
              },
              process.env.JWT_SECRET
          );

          return  res.status(200).json({ token, name:user.fullname});
      } else {
          const err ="ادرس ایمیل با کلمه عبور همخوانی ندارد";
          throw err;
      }
    }else if(!user){
      const err = "آدرس ایمیل یا کلمه عبور اشتباه است";
      throw err;
    }
   
    } catch (err) {
        return res.status(400).json({message:err})
    }
   
   
}
exports.signup=async(req,res)=>{
   try {
       
      await User.userValidation(req.body);
      const{fullname,email,password}=req.body;
      const user=await User.findOne({email:email});
      if(user){
         return res.status(400).json({message:"قبلا با این ایمیل ثبت نام شده است لطفا لاگین کنید"});
       }
       await User.create({ fullname, email, password});
   return res.status(200).json({fullname, email, password});

   } catch (error) {
   
     return res.status(400).json(error);
   }
}

exports.signout=async(req,res)=>{
   try {
      return res.status(200).json({message:"شما خارج شدید"})
   } catch (error) {
      return res.status(400).json(error);
   }
}