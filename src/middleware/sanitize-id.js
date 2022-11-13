/**
 * author: Refaat
 * this middleware validates that the 
 * in in the request parameters match an monogdb object id
 */
const ObjectId = require('mongoose').Types.ObjectId;

const sanitizeId = (request, response, next) => {
    if (ObjectId.isValid(request.params.id)) {
        return next();
    }

    return response.status(400).json({
        msg: 'invalid id'
    });
}


module.exports = { sanitizeId }