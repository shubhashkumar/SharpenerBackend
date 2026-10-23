const express=require('express');
const controllers=require("../controllers/bookingControllers");
const routers=express.Router();
//routers.get("/user",controllers);
routers.post("/user",controllers.adduser);
routers.get("/available/:seats",controllers.findbus);
routers.post("/bus",controllers.addbus);
module.exports=routers;