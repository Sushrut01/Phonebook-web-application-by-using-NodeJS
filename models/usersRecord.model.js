const mongoose= require('mongoose');

var usersRecordSchema= new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
});

mongoose.model('UsersRecord', usersRecordSchema);