const Course = require('../model/course');

class ClassService {
    async getAll() {
        return await Course.find({});
    }
}

module.exports = new ClassService();