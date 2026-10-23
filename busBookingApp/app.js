const express=require("express");
const routers=require("./routes/routers");
const dataBase=require('./utils/dbconnection');
const { FORCE } = require('sequelize/lib/index-hints');

const app=express();
const port=3000;
app.use(express.json());
app.use("/users",routers);
app.use("/buses",routers);
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