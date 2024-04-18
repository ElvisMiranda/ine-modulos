const { Schema, model } = require('mongoose');

const classSchema = new Schema({
    name: String,
    courseId: String,
    date: Date,
    startTime: String,
    endTime: String,
    mode: String
});

module.exports = model('Class', classSchema);