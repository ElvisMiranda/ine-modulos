const course = require('../model/course');

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