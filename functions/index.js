'use strict';

let functions = require('firebase-functions');
let nodemailer = require('nodemailer');

// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// To do: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendEmail = functions.database.ref('/emails/{uid}').onWrite(event => {
    const val = event.data.val();

    if (val.sent) {
        return;
    }

    const mailOptions = {
        from: 'era.mediakw@gmail.com',
        to: 'biz@era.media',
    };

    // The user just sent an email from era's website.
    if (!val.sent) {
        mailOptions.subject = val.subject + val.email;
        mailOptions.text = val.message;
        val.sent = true;
        event.data.ref.set(val);
        return mailTransport.sendMail(mailOptions).then(() => {
            console.log('New contact form email sent from:', val.email);
        });
    }
});
