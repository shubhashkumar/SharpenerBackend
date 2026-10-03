const express=require("express");
const router=express.Router();
router.get("/products",(req,res)=>
{
    console.log(`${req.method} is made to ${req.url}`);
    res.send(`<center><h1>Here is the list of all products.</h1></center>`)
})
router.post("/products",(req,res)=>
{
    console.log(`${req.method} is made to ${req.url}`);
    res.send(`<center><h1>A new product has been added.</h1></center>`)
})
module.exports=router;