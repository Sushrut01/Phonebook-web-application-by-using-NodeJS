const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/phonebook', { useNewUrlParser: true }, (err) => {
    if(!err) {
        console.log('Database Connected Successfully!');
    }
    else {
        console.log('Database connection error:' +err);
    }
});

require('./usersRecord.model');