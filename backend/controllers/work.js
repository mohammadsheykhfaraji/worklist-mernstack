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
      
   }
  
}
exports.setwork=(req,res)=>{ 
   
}

