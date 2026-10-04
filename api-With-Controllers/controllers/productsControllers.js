const getProducts = (req, res) => {
    res.send("fetching all products");
}

const getProductById = (req, res) => {
    const productId = req.params.id;
    res.send(`fetching product with id ${productId}`);
}

const postProduct = (req, res) => {
    res.send("Adding a new product");
}

module.exports = {
    getProducts,
    getProductById,
    postProduct
}