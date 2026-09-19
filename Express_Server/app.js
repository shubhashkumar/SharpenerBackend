const express=require('express');
const PORT=3000;

const app=express();




app.listen(PORT,()=>
{
    console.log(`"Server is up and running on port 3000! Ready to handle requests."`);
})