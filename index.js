const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send("hello Test page")
})

app.get('/abc', (request, response) => {
    response.send("abc")
})

const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/student_db');

db.then(() => { console.log('Mongodb Connected'); });

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Server Running:3000")
})