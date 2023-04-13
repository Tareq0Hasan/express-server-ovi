const express= require('express');
const router= express.Router();

const{productName}=require('../controller/productController');


router.get("/product",productName)


module.exports=router;