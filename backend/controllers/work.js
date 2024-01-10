const workmodel=require('../models/workmodel.js');

exports.addwork=(req,res)=>{
 
   const {work,token}=req.body;
   console.log(work,token);
   return res.status(200).json({message:"injaiim"})
   
}
exports.setwork=(req,res)=>{ 
   
}

