const express=require('express');
const dataBase=require('./utils/connectiondb');
const table01Router=require('./routes/table01Router');
const { FORCE } = require('sequelize/lib/index-hints');
const modeStudentTable01=require('./model/table01');

const app=express();
const port=3000;
app.use(express.json());
app.use('/student',table01Router);

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
