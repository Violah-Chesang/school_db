const express = require('express');
const Student = require('../models/studentModel');

const router = express.Router();

//displays registration form on the browser
router.get('/student-registration', (req, res) => {
    res.render('index');
})

//displays search form on the browser
router.get('/search', (req, res) => {
    res.render('search-form');
})

//displays searched output on the browser
router.get('/output', async (req, res) => {
    let studentEmail = req.body.email;
    let emailResult = await Student.find({studentEmail});
    

    let data = {
        email : emailResult
    }
    res.render('output', data);
})


//create a record/document in the server
router.post('/submit-form', (req, res) => {
    let formData = req.body;
    let newstudent = new Student(formData)
    newstudent.save();

    //once data is saved then go back to an empty form
    res.redirect('/student-registration');

    console.log(newstudent);
});

//read a record in the server.
router.post('/search-form', async(req, res) => {
    let studentEmail = req.body.email;
    let emailResult = await Student.find({studentEmail});
    
    let data = {
        email : emailResult
    }

    res.redirect('/output')
    console.log(data)
});

module.exports = router;