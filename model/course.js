const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
    name: String,
    module: String,
    start: Date,
    end: Date
});

module.exports = model('Course', courseSchema);