const productService = require('../services/productService');

const getProducts = (req, res) => {
  const products = productService.getAllProducts();
  console.log(products);
    res.send(products);
};

const getProductById = (req, res) => 
{
    const product=productService.getProductById(req.params.id);
    console.log(product);
    res.send(product);
}

const postProducts = (req, res) => {
  const newProduct = productService.postProducts();
  console.log(newProduct);
  res.status(201).send(newProduct);
};

module.exports = {
  getProducts,
  getProductById,
  postProducts
};