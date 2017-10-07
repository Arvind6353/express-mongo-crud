(function() {


    var mongoose = require('mongoose')


    mongoose.connect('mongodb://admin:admin@ds113505.mlab.com:13505/sample')

    var db = mongoose.connection

    db.on('error', function() {

        console.log('error in connection')
    })

    db.once('open', function() {
        console.log('succesful');

    })

})();