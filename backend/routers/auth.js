const express = require('express')

const {signin,signup,signout}=require('../controllers/auth')

const router=express.Router();


router.get('/signin', signin);
router.get('/signup', signup);
router.get('/signout', signout);


module.exports=router;