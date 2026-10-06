const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

router.get('/product', fileController);
module.exports = router;