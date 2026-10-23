const express=require('express');
const router=express.Router();
const controller=require("../controller/controller");
router.post("/user01",controller.addEntries);
router.put("/user01/:id",controller.updateEntries);
router.delete("/user01/:id",controller.deleteEntries);
module.exports=router;