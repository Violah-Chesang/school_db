const mongoose = require('mongoose');
function getMongodbConnection(){
    //set the environment
    const DB_URL = process.env.DB_URL;

    //create a connection
    mongoose.connect(DB_URL);
    const db = mongoose.connection;

    db.once('open', ()=> {
        console.log('Connection to the database successful!')
    });

    db.on('error', (err)=> {
        console.log('Failed to connect to the database!')
        console.log(err);
    });
    return db;
}
module.exports = getMongodbConnection();