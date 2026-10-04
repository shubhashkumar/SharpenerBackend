const express = require('express');
const app = express();
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const cartRouter = require('./routes/cartRouter');
const pageNotFoundRouter = require('./routes/pageNotFound');
const PORT = 3000;

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/cart', cartRouter);
app.use(pageNotFoundRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});