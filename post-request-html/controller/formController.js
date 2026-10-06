const express = require('express');
const formService = require('../services/formService');
const getForm = (req, res) => {
    const filePath = formService();
    const data = req.body;
    console.log(data);
    res.sendFile(filePath);
};
module.exports=getForm;