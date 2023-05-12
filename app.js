const express = require('express');
const ejs = require('ejs');
const mongoConnection = require('./config/db');
const router = require('./routes/index');


const app = express();

app.use(express.json());
app.use(router);

app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('The server has started');
});