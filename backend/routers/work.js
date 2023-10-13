const express = require('express')

const {sayhi}=require('../controllers/work.js')

const router=express.Router();


router.get('/', sayhi);


module.exports=router;