
const mongoos=require('mongoose');
 

const connectdb=async()=>{
    
    try{
        const con=await mongoos.connect(process.env.MONGODB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`mongodb conected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }


}


module.exports=connectdb;