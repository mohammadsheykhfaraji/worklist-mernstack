const express = require('express');

const {addwork,getwork}=require('../controllers/work.js');

const router=express.Router();


router.post('/addwork', addwork);

router.post('/getwork', getwork);

module.exports=router;