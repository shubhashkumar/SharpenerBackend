const express=require("express");
const app=express();
const PORT=3000;

app.get("/welcome/:username",(req,res)=>
{
    const user=req.params.username;
    const location=req.query.name;
    const age=req.query.age;
    res.send(`<center><h1>welcome to the home page ${user}</h1></center>
        <center>your age:${age}</center>
        <center>your location:${location}</center>`)
})


app.listen(PORT, () =>
{
    console.log(`Server is running on http://localhost:${PORT}`);
})