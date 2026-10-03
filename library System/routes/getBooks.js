const express = require('express');
const router = express.Router();
router.get("/", (req, res) => 
{
    res.send(`<center><h1>Here is the list of books!</h1></center>`)
})
module.exports = router;