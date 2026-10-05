const express= require('express');
const fs=require('fs');
const path=require('path');
const productFilePath=()=>
{
  return path.join(__dirname,'..','views','product.html');
}


module.exports={productFilePath};