/**
 * author: Refaat
 * this module exports a controller function for the auth-router
 */
const authService = require('../services/auth-service');

// this controller sends a json-web-token to a specified email 
const sendJwtToken = async (request, response) => {
    try {
        // get the recivers email adderss from the request body
        const reciverEmail = request.body.email;

        // generate a jwt and send it to the recivers email address
        await authService.sendJwtToken(reciverEmail);
        response.status(200).json({
            msg: `successfully sent an email to ${reciverEmail}`,
        });
    } catch (error) {
        console.error(error)
        response.status(500).json({
            error: 'something went wrong on our side...'
        });
    }
}


module.exports = { sendJwtToken }