const express = require('express');
const ejs = require('ejs');
const mongoConnection = require('./config/db');
const router = require('./routes/index');


const app = express();

app.use(express.urlencoded());
app.use(router);

app.set('view engine', 'ejs')

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`The server has started at port ${PORT}`);
});