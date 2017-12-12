const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/todolist',{useMongoClient: true});

const db = mongoose.connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',require('./routes/routes')(express));

app.listen(3000, () => {
    console.log(`app listen on port 3000...`);
})