var mongoose = require('mongoose')

var studentSchema = mongoose.Schema({
    studentname: { type: 'String', required: true, unique: true }
}, { timestamp: true })


module.exports = mongoose.model('student', studentSchema, 'students')
 
 