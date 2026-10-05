const getAllProducts=()=>
{
    return "getting all products";
}

const getProductById=(id)=>
{
    return `getting product by id: ${id}`;
}

const postProducts=()=>
{
    return "adding a new product";
}
module.exports = { getAllProducts, getProductById, postProducts };