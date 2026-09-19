const express=require('express');
const PORT=3000;
const app=express();

app.get("/products",(req,res,next)=>
{
    res.send(`<center><h1>Here is the list of all products.</h1></center>`)
});
app.post("/products",(req,res,next)=>
{
    res.send(`<center><h1>A new product has been added</h1></center>`)
});


app.get("/categories",(req,res,next)=>
{
    res.send(`<center><h1>Here is the list of all categories..</h1></center>`)
});
app.post("/categories",(req,res,next)=>
{
    res.send(`<center><h1>A new category has been created.</h1></center>`)
});
app.use((req,res)=>
{
    res.status(404).send(`<h1>404 - Page Not Found</h1>`);
})



app.listen(PORT,()=>
{
    console.log(`"Server is up and running on port 3000! Ready to handle requests."`);
})