/**
 * author: Refaat
 * this module exports a Joi schematic for
 * email address validation
 */
const Joi = require('joi');

// custom regex error msg?
const emailSchema = Joi.object({
    email: Joi.string().regex(RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)).required()
});


module.exports = { emailSchema }