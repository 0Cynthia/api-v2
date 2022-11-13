/**
 * author: Refaat
 * this middleware validates an email in the request body using
 * a regular expression
 */
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sanitizeEmail = (request, response, next) => {
    // deconstruct request body for the email
    const { email } = request.body;

    // success
    if (email.match(regex)) {
        return next();
    }

    // fail
    return response.status(400).json({
        error: 'invalid email address'
    });

}


module.exports = { sanitizeEmail };