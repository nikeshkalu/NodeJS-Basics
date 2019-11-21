//student collections is made for the schema of studentSchma.
module.exports = mongoose.model('student', studentSchema);

const mongoose = require('mongoose');

//new schema made for making the collections
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    rollNo: {
        type: Number
    },
    // teacher: {
    //     type: mongoose.Schema.type.Id.ObjectId,
    //     ref: 'teacher'
    // }
})

//exports.Student = mongoose.model('Student',studentSchema);