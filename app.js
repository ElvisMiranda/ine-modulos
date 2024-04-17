require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const courseService = require('./services/courseService');

const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors({ optionsSucessStatus: 200 }));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/courses', (req, res) => {
    res.send(courseService.courses.getAll());
});

app.listen(_ => {
    console.log(`Listening on port ${port}`);
});