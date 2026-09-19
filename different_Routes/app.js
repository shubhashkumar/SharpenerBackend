const express=require('express');
const PORT=3000;

const app=express();
app.get("/orders",(req,res,next)=>
{
    res.send(`<center><h1>Here is the list of all orders.</h1></center>`)
});
app.post("/orders",(req,res,next)=>
{
    res.send(`<center><h1>A new order has been created</h1></center>`)
});

app.get("/users",(req,res,next)=>
{
    res.send(`<center><h1>Here is the list of all users..</h1></center>`)
});
app.post("/users",(req,res,next)=>
{
    res.send(`<center><h1>A new user has been added.</h1></center>`)
});



app.listen(PORT,()=>
{
    console.log(`"Server is up and running on port 3000! Ready to handle requests."`);
})