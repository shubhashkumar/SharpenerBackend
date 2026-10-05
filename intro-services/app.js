const express = require('express');
const productRouter = require('./routers/productRouter');
const app = express();
app.use('/products',productRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});