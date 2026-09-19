const express=require('express');
const PORT=3000;

const app=express();
app.use("/welcome",(req,res,next)=>
{
    let user="Guest";
    req["user"]=user;
    console.log(req.user);
    res.send(`<h1> "Welcome,${req.user}!"</h1>`)
})



app.listen(PORT,()=>
{
    console.log(`"Server is up and running on port 3000! Ready to handle requests."`);
})