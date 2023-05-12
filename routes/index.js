const express = require('express');
const studentModel = require('../models/studentModel');

const router = express.Router();


router.get('/login', (req, res) => {
    res.render('index');
})


router.post('/submit-form', (req, res) => {
    let formData = req.body;
    studentModel.save(formData);
    console.log(formData);
    res.send('Submitted successfully!')
})

module.exports = router;