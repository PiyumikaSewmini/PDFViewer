const mongoose = require('mongoose');

const AuthenticationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const AuthenticationModel = mongoose.model('employee', AuthenticationSchema);

module.exports = AuthenticationModel;
