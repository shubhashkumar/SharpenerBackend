const express=require('express');
const router=express.Router();
const controller=require("../controller/controller");
router.post("/user01",controller);
module.exports=router;