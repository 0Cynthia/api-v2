/**
 * author: Refaat
 * this service exports a function for sending emails
 */
const nodemailer = require('nodemailer');

/**
 * this service sends specified emails to a specified email address
 * @param {Object} email email information 
 */
const sendEmail = async (email) => {
    try {
        // creates a SMTP transport object with the specified senders credentials 
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,                // hostname/ip of email server
            port: process.env.EMAIL_PORT,                // port        of email server
            secure: true,                                // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_SENDER_USERNAME, // senders username
                pass: process.env.EMAIL_SENDER_PASSWORD  // senders password
            },
        });

        // defines and sends an email to the specified reciver(s) 
        let info = await transporter.sendMail({
            from: email.from,       // sender address
            to: email.to,           // list of receivers
            subject: email.subject, // Subject line
            text: email.text,       // plain text body
            html: email.html,       // html body
        });
        
        // todo: catch dsn, email not found errors and stuff
        // not a biggie if i dont though, the user just wont know the email
        // they provided is not working 
    } catch (error) {
        throw error;
    }
}


module.exports = { sendEmail }