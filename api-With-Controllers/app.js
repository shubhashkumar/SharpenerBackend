const express = require('express');
const app = express();
const port=3000;
const productsRoute = require('./routes/productsRoute');
app.use("/api/products", productsRoute);
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});