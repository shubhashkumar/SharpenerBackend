const express = require('express');
const filePathService = require('../services/sendFilePath');
const fileController=(req,res)=>
{
    const filePath = filePathService();
    res.sendFile(filePath);
}
module.exports = fileController;