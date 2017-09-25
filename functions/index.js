'use strict';

let functions = require('firebase-functions');
const mailgunKey = functions.config().mailgun.key;
const mailgunDomain = functions.config().mailgun.domain;

let mailgun = require('mailgun-js')({apiKey: mailgunKey, domain: mailgunDomain});

// Sends an email confirmation when a visitor submits a contact form.
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
        mailOptions.subject = `${val.subject} ${val.email}`;
        mailOptions.text = val.message;
        val.sent = true;
        event.data.ref.set(val);
        mailgun.messages().send(mailOptions, (error, body) => {
            if(error) {
                console.log('Error while sending email:', error);
            }else {
                console.log('New contact form email sent from:', val.email)
            }
        })
    }
});
