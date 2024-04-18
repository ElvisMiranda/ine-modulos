require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGODB_URI);

const courseService = require('./services/courseService');

const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/courses', async (req, res) => {
    res.send(await courseService.getAll());
});

app.get('/api/courses/:courseId/classes', async (req, res) => {
    
}).post('/api/courses/:courseId/classes', async (req, res) => {

}).put('/api/courses/:courseId/classes/:classId', async (req, res) => {

}).delete('/api/courses/:courseId/classes/:classId', async (req, res) => {

});

var listener = app.listen(port, _ => {
    console.log(`Listening on port ${port}`);
});