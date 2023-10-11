const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

require('dotenv').config();


//app
const app=express();



//db

const conectdb=async()=>{

    try{
        const con=await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
           ///// dont open this code///// useFindAndModify:true,
        });
        console.log(`mongodb conected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }


}

conectdb();



///midellwer
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routing
app.use("/api",require('./routers/work.js'));



const port=process.env.PORT ||3001 ; 

app.listen(port,()=>{
   console.log(`server is runing on port ${port}`)
});