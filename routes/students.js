var express = require('express')

var studentRouter = express.Router();
var studentController = require('../controllers').studentController

studentRouter.route('/')
    .get(studentController.getAllStudents)
    .post(studentController.createStudent)
    .delete(studentController.deleteStudents)


studentRouter.route('/:studentId')
    .get(studentController.getStudentById)
    .put(studentController.updateStudentById)
    .delete(studentController.deleteStudentById)

module.exports = studentRouter