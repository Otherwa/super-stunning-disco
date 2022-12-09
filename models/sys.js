const mongoose = require('mongoose');
const schema = mongoose.Schema;

const register = new schema({
    registerid: {
        unique: true,
        required: true,
        type: 'string'
    },
    firstname: {
        required: true,
        type: 'string'
    },
    middlename: {
        required: true,
        type: 'string'
    },
    lastname: {
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
    phone: {
        required: true,
        type: 'string'
    },
    course: {
        required: true,
        type: 'string'
    },
    department: {
        required: true,
        type: 'string'
    },
    paid: {
        type: 'boolean',
        default: false
    },
    date: {
        type: 'string',
    }

}, {
    versionKey: false //here
})

module.exports = mongoose.model('SaveTheSystem', register);