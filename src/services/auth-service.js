/**
 * author: Refaat
 * this module exports a service function for the auth-controller
 */
const { sendEmail } = require('./email-service');
const jwt = require('jsonwebtoken');

/**
 * this service generates and sends a jwt to a specified email address
 * @param {String} reciversEmailAddress the email address of the reciver 
 */
const sendJwtToken = async (reciversEmailAddress) => {
    try {
        // generate a json-web-token
        const token = jwt.sign(
            { reciversEmailAddress },   // json-web-token payload
            process.env.JWT_SECRET,     // secret key to sign the json-web-token
            { expiresIn: '10m'});       // options

        // create an email object with the specified reciver and its json-web-token
        const email = {
            from: process.env.EMAIL_SENDER_USERNAME,
            to: reciversEmailAddress,
            subject: 'authentication token',
            text: `hey 👋, here is the auth token you requested!\n${token}`,
            body: `<h2>hey 👋, here is the auth token you requested!\n${token}</h2>`
        }

        // (try to) send the email >:)
        await sendEmail(email);
    } catch (error) {
        throw error;
    }
}


module.exports = { sendJwtToken }