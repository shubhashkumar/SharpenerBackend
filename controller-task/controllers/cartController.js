const getCartById = (req, res) => {
    res.send(`fetching cart by ID: ${req.params.id}`);
}

const postCartById = (req, res) => {
    res.send(`Adding a new cart for user ID: ${req.params.id}`);
}   

module.exports = {
    getCartById,
    postCartById
};
