const express= require('express');
const productServices=require('../services/productServices');
const productController=(req,res)=>
{
   const path= productServices.productFilePath();
   res.sendFile(path);
}
module.exports=productController;