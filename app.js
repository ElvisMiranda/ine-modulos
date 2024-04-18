require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGODB_URI);

const courseService = require('./services/courseService');
const classService = require('./services/classService');

const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())

app.get('/api/courses', async (req, res) => {
    res.send(await courseService.getAll());
});

app.get('/api/courses/:courseId/classes', async (req, res) => {
    const courseId = req.params.courseId;
    res.send(await classService.getByCourse(courseId));
});

app.get('/api/classes/:classId', async (req, res) => {
    const classId = req.params.classId;
    res.send(await classService.get(classId));
}).post('/api/classes', async (req, res) => {
    const classEntry = req.body;

    res.send(await classService.add(classEntry));
}).put('/api/classes/:classId', async (req, res) => {
    const classId = req.params.classId;
    const classEntry = req.body;

    res.send(await classService.update(classId, classEntry));

}).delete('/api/classes/:classId', async (req, res) => {
    const classId = req.params.classId;
    await classService.delete(classId);
    res.send({ status: 'Ok'});
});

var listener = app.listen(port, _ => {
    console.log(`Listening on port ${port}`);
});