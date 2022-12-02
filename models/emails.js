const mongoose = require('mongoose');
const schema = mongoose.Schema;

const register = new schema({
    email: {
        unique: true,
        type: 'string'
    },
    date: {
        required: true,
        type: 'string'
    }
}, {
    versionKey: false //here
})

module.exports = mongoose.model('Registers', register);