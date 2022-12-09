const mongoose = require('mongoose');
const schema = mongoose.Schema;

const register = new schema({
    name: {
        required: true,
        type: 'string'
    },
    email: {
        uinque: true,
        required: true,
        type: 'string'
    },
    msg: {
        type: 'string'
    },
    date: {
        type: 'string',
    }

}, {
    versionKey: false //here
})

module.exports = mongoose.model('ContactQuery', register);