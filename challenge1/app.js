const express=require("express");
const app=express();
const port=3000;
app.get("/products",(req,res)=>
{
    console.log(`${req.method} is made to ${req.url}`);
    res.send(`<center><h1>Here is the list of all products.</h1></center>`)
})
app.post("/products",(req,res)=>
{
    console.log(`${req.method} is made to ${req.url}`);
    res.send(`<center><h1>A new product has been added.</h1></center>`)
})
app.get("/categories",(req,res)=>
{
    console.log(`${req.method} is made to ${req.url}`);
    res.send(`<center><h1>Here is the list of all categories.</h1></center>`)
})
app.post("/categories",(req,res)=>
{
    console.log(`${req.method} is made to ${req.url}`);
    res.send(`<center><h1>A new category has been added.</h1></center>`)
})

app.listen(port,()=>
    
    { 
        console.log(`server is running on port ${port}`);
     })
