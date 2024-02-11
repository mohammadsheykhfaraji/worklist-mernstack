const Token=require('../models/token.js')
const Work = require('../models/work.js')

const workmodel=require('../models/work.js');

exports.addwork=async(req,res)=>{
   try {
      const {work,token}=req.body;
      const tokenn= await Token.findOne({accessToken:token});
      if(tokenn){

         await Work.create({work:work,user: tokenn.user});
      
         return res.status(200).json({message:"ثبت شد"})
      }else{
          return res.status(400).json({message:"ثبت نشد"})
      }

   } catch (error) {
      return res.status(400).json(error)
   }
  
}
exports.getwork=async(req,res)=>{ 
   try {
      const {token}=req.body;
      const tokenn= await Token.findOne({accessToken:token});
      if(tokenn){

         const worksss= await Work.find({user: tokenn.user});
      
         return res.status(200).json(worksss);
      }else{
          return res.status(400).json({message:"توکن شما معتبر نیست"})
      }

   } catch (error) {
      return res.status(400).json(error)
   }
}

