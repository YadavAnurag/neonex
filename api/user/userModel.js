var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    dateOfReport: {
        type: Date,
        require: true
    },
    dateOfBirth: {
        type: Date,
        require: true
    },
    age: {
        type: number,
        require: true
    },
    birthWeight: {
        type: number,
        require: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        require: true
    }

});