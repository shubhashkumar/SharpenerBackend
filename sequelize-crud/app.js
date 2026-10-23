const express=require('express');
const router=require("./routes/router");
const dataBase=require('./utils/dbconnection');
const { FORCE } = require('sequelize/lib/index-hints');
const port=3000;
const app=express();
app.use(express.json());
app.use("/user",router);
dataBase.sync({FORCE:true}).then(()=>
{
 app.listen(port,()=>
{
    console.log('server is running');
})
}).catch((err)=>
{
    console.log(err);
});