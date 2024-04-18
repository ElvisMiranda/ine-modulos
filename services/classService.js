const Class = require('../model/class');

module.exports = {
    getByCourse: async(courseId) => {
        return await Class.find({ courseId: courseId });
    },

    addClass: async (classEntry) => {
        var $class = new Class(classEntry);

        await $class.save();
    }
};