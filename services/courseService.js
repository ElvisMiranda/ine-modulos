const course = require('../model/course');
const mongoose = require('../data/conn');
module.exports = {
    courses: {
        getAll: () => {
            //return course.find({});
            return {
                hello: 'Hello World'
            }
        }
    }
};

mongoose.disconnect();