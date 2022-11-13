/**
 * author: Refaat
 * this module exports a Joi schematic for
 * Log model/object validation
 */
const Joi = require('joi');

const logSchema = Joi.object({
    message: Joi.string().required(),
    ip: Joi.string().required()
});


module.exports = { logSchema }