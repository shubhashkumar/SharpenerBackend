const express=require('express');
const router=express.Router();
const controller=require("../controller/studentController")
router.get("/getStudent",controller.getEntries,);
router.post("/postStudent",controller.postEntries);
router.put("/putStudent/:id",controller.putEntries);
router.delete("/deleteStudent/:id",controller.deleteEntries);

module.exports=router;