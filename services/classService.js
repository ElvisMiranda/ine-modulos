const Class = require('../model/class');

class ClassService {
    async getByCourse(courseId) {
        return await Class.find({ courseId: courseId });
    }

    async add(classEntry) {
        var $class = new Class(classEntry);

        return await $class.save();
    }

    async update(classId, classEntry) {
        var $class = await Class.findById(classId);

        $class.name = classEntry.name;
        $class.date = classEntry.date;
        $class.startTime = classEntry.startTime;
        $class.endTime = classEntry.endTime;
        $class.mode = classEntry.mode;

        return await $class.save();
    }

    async get(classId) {
        return await Class.findById(classId);
    }

    async delete(classId) {
        await Class.deleteOne({ _id: classId });
    }
}

module.exports = new ClassService();