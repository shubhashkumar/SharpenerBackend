const express=require('express');
const table01Controller=require('../controller/table01Controller');
const router=express.Router();
router.post('table01',table01Controller);
module.exports=router;