const Class = require('../model/class');

module.exports = {
    getByCourse: async(courseId) => {
        return await Class.find({ courseId: courseId });
    },

    add: async (classEntry) => {
        var $class = new Class(classEntry);

        return await $class.save();
    },

    update: async (classId, classEntry) => {
        var $class = await Class.findById(classId);

        $class.name = classEntry.name;
        $class.date = classEntry.date;
        $class.startTime = classEntry.startTime;
        $class.endTime = classEntry.endTime;
        $class.mode = classEntry.mode;

        return await $class.save();
    },

    get: async (classId) => {
        return await Class.findById(classId);
    },

    delete: async (classId) => {
        await Class.deleteOne({ _id: classId });
    }
};