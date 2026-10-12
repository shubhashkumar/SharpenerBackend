const express= require('express');
const db=require("./utils/db-connection");
const route=require("./routes/studentRoute");
const port=3000;
const app=express();
app.use(express.json());
app.get("/",(req,res)=>
{
    res.send("Hello World!");
})
app.use("/student",route);
app.listen(port,()=>
{
    console.log(`app is running on server`);
})