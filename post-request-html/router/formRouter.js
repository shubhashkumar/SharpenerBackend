const express = require('express');
const router = express.Router();
const formController = require('../controller/formController');
router.get('/form', formController);
module.exports = router;