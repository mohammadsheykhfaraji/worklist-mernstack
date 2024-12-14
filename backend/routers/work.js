const express = require('express');

const {addwork,getwork,delwork}=require('../controllers/work.js');

const router=express.Router();


router.post('/addwork', addwork);

router.post('/getwork', getwork);

router.post('/delwork', delwork);

module.exports=router;