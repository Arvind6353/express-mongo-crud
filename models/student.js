var mongoose = require('mongoose')

var studentSchema = mongoose.Schema({
    name: { type: 'String', required: true, unique: true },
    age: { type: 'number' },
    address: { type: 'String' },
    hobbies: { type: 'String' },
    gender: { type: 'String' }

}, { timestamp: true })


module.exports = mongoose.model('student', studentSchema, 'students')