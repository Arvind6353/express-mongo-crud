var express = require('express');
var indexRouter = express.Router();
var studentRouter = require('./students')

indexRouter.get('/users', function(req, res, next) {
    res.redirect('/students')
});

exports.studentRouter = studentRouter;
exports.indexRouter = indexRouter;