const express=require("express");
const router=express.Router();
router.get("/categories",(req,res)=>
{
    console.log(`${req.method} is made to ${req.url}`);
    res.send(`<center><h1>Here is the list of all categories.</h1></center>`)
})
router.post("/categories",(req,res)=>
{
    console.log(`${req.method} is made to ${req.url}`);
    res.send(`<center><h1>A new category has been added.</h1></center>`)
})

module.exports=router;
