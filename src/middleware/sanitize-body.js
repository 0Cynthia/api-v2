/**
 * author: Refaat
 * this middleware validates a request body with the provided Joi schema
 */

/**
 * @param {Object} schema a Joi schematic to validate the request body with
 */
const sanitizeBody = (schema) => {
    return (request, response, next) => {
        // declare & initialize the result object
        const result = schema.validate(request.body);

        // if error is not in the result object then the validation has passed
        if (result.error === undefined) {
            // success
            next();
        } else {
            response.status(400).json({
                error: result.error.message
            });
        }
    }
}


module.exports = { sanitizeBody }