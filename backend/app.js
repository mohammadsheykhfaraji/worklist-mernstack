const path=require('path');

const express=require('express');
const cors=require('cors');


const dotenv=require('dotenv');

const Connectdb=require('./config/db');
dotenv.config({path:"./config/config.env"})



////connectdb
Connectdb();
 


//app
const app=express();
 



///midellwer
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
 
//routing
app.use("/api",require('./routers/work.js'));
app.use("/api",require('./routers/auth.js'));
// app.use(require('./middleware/notfound.js'));



const port=process.env.PORT  ; 

app.listen(port,()=>{
   console.log(`server is runing on port ${port}`)
});