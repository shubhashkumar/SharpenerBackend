const express = require('express');
const userRoutes = require('./routers/userRoutes');
const productRoutes = require('./routers/productRouter');
const cartRoutes = require('./routers/cartRouter');
const app = express();
const port = 3000;  
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/carts', cartRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});