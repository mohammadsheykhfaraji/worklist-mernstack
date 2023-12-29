const express = require('express')

const {signin,signup,signout,checkauth}=require('../controllers/auth')

const router=express.Router();


router.post('/signin', signin);
router.post('/signup', signup);
router.get('/signout', signout);
router.post('/checkauth', checkauth);


module.exports=router;