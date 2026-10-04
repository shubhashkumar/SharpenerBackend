const express = require('express');
const productsController = require('../controllers/productsControllers');
const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProductById);
router.post('/', productsController.postProduct);

module.exports = router;