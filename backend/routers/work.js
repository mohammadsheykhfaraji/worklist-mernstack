const express = require('express');

const {addwork}=require('../controllers/work.js');

const router=express.Router();


router.post('/addwork', addwork);


module.exports=router;