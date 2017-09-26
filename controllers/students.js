var Students = require('../models/student')
exports.getAllStudents = function(req, res, next) {
    Students.find({}, function(err, docs) {
        if (err) {
            next(err);
            return;
        }
        res.json(docs)
    })
}

exports.createStudent = function(req, res, next) {
    console.log(req.body)
    Students.create(req.body, function(err, docs) {
        if (err) {
            next(err);
            return;
        }
        res.json(docs)
    })
}

exports.deleteStudents = function(req, res, next) {

    Students.remove({}, function(err, row) {
        if (err) {
            console.log("Collection couldn't be removed" + err);
            return;
        }

        res.send('deleted students ')
        console.log("collection removed");
    })

}


exports.getStudentById = function(req, res, next) {
    Students.findById(req.params.studentId, function(err, docs) {
        if (err) {
            next(err);
            return;
        }
        console.log(req.params.studentId)
        res.json(docs)
    })
}


exports.updateStudentById = function(req, res, next) {
    Students.findByIdAndUpdate(req.params.studentId, { $set: req.body }, { new: true }, function(err, docs) {
        if (err) {
            next(err);
            return;
        }
        console.log('updated', req.params.studentId)
        res.json(docs)
    })
}



exports.deleteStudentById = function(req, res, next) {
    Students.findByIdAndRemove(req.params.studentId, function(err, docs) {
        if (err) {
            next(err);
            return;
        }
        console.log('deleted ', req.params.studentId)
        res.send(`deleted student ${req.params.studentId}`)
    })
}