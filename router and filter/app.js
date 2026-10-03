const express = require('express');
const app = express();
const port = 3000;
const productRouter = require('./routes/products');
const categoryRouter= require('./routes/categories');
app.use("/categories", categoryRouter);
app.use("/products", productRouter);


app.listen(port, () => 
    {
        console.log(`server is running on port ${port}`);
    })
