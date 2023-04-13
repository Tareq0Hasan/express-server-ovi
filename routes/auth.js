const express= require('express');
const router= express.Router();

const {greetings,overview}=require('../controller/auth');
const {createuser}= require('../controller/userController');

router.get("/",greetings)
router.get("/overview",overview)


router.post("/create",createuser);

module.exports=router;