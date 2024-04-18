const Course = require('../model/course');

module.exports = {
    getAll: async () => {
        return await Course.find({});
    }
};