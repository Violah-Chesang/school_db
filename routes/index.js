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

//create a record/document in the server
router.post('/submit-form', (req, res) => {
    let formData = req.body;
    
    let newstudent = new Student(formData)
    newstudent.save();

    //once data is saved then go back to an empty form
    res.redirect('/student-registration')
});

//read a record in the server.
router.post('/search-form', async(req, res) => {
    let formData = req.body.email;
    console.log(formData)

    
    let emailResult = await Student.find({email : formData});
    console.log(emailResult);
    let data = {
        records : emailResult
    }
    res.render('output',data)

});

module.exports = router;