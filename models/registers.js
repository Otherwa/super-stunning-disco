const mongoose = require('mongoose');
const schema = mongoose.Schema;

const register = new schema({
    firstName: {
        required: true,
        type: 'string'
    },
    middleName: {
        required: true,
        type: 'string'
    },
    lastName: {
        required: true,
        type: 'string'
    },
    email: {
        uinque: true,
        required: true,
        type: 'string'
    },
    rollno: {
        required: true,
        type: 'string'
    },
    date: {
        type: 'string',
    }

}, {
    versionKey: false //here
})

module.exports = mongoose.model('Users', register);