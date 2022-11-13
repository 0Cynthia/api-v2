/**
 * author: Refaat
 * this middleware tries to verify a json-web-token found in a 
 * requests authorization header
 */
const jwt = require('jsonwebtoken');


const isAuthenticated = (request, response, next) => {
    try {
        // get token from the requests authorization header
        const token = request.headers.authorization;

        // validate that there is a token the authorization headers
        if (token === undefined) {
            return response.status(400).json({
                error: 'please provide an authorization token with your request'
            });
        }

        // authentication successful
        if (jwt.verify(token, process.env.JWT_SECRET)) {
            return next();
        }

        // authentication unsuccessful
        return response.status(400).json({
            error: 'you are not authorized to make this request!'
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            error: 'something went wrong on our side...'
        });
    }
}


module.exports = { isAuthenticated }