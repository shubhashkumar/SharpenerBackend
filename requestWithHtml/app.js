const express= require('express');
const productRoute=require('./routers/productRouter');
const app=express();
const PORT=3000;
app.use('/api',productRoute);
app.listen(PORT,()=>
{
    console.log(`the server is running on http:localhost:${PORT}`);
})