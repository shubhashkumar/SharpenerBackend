const express = require('express');
const router = express.Router();
router.post("/", (req, res) => 
{
    res.send(`<center><h1>Book added successfully!</h1></center>`)
})
module.exports = router;