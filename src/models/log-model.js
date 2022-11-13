/**
 * author: Refaat
 * this module defines a log schematic and exports a log model
 */
const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    message: {
        type: String,
        required: [true, 'a message is required']
    },

    ip: {
        type: String,
        required: [true, 'an ip is required']
    },

    date: {
        type: Date,
        required: [true, 'a date is required'],
        default: new Date()
    }
});


module.exports = mongoose.model('Log', logSchema);