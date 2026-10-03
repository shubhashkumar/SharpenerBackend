const express= require('express');
const router= express.Router();
router.get('/', (req, res) => {
    res.send('List of all courses');
})
router.get('/:id', (req, res) => {
    const id= req.params.id;
    res.send(`Details of course with ID: ${id}`);
})
module.exports = router;