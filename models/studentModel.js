// {
//     name: 'Paul Kamwara',
//     email: 'mttpamuk@yahoo.com',
//     phone: '+254728172743 ',
//     city: 'Tala'
//   }
const mongoose = require('mongoose');
let studentSchema = new mongoose.Schema({ //new keyword for creating constructor
    name: {type : String, required: true},
    email: {type : String, required: true},
    phone: {type : String, required: true},
    city:{type : String}
});

let Student = mongoose.model('Student', studentSchema); //create a model. The urguments in the method are the collection name(Student), and the Schema name

module.exports = Student; //export it to the router page