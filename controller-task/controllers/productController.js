const getAllProducts = (req, res) => {
    res.send("fetching all products");
}

const getProductById = (req, res) => {
    res.send(`fetching product by ID: ${req.params.id}`);
}

const createProduct = (req, res) => {
    res.send("Adding a new product");
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct
};