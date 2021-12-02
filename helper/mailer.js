const nodemailer = require("nodemailer");
// var smtpTransport2 = require('nodemailer-smtp-transport');
async function mail(to_mail, mail_subject, mail_content) {

    const mailOptions = {
        to: to_mail,
        from: 'ishitarathokre@questglt.org.com',
        subject: mail_subject,
        html: mail_content
    };

    const smtpTransport = nodemailer.createTransport({
        // host: 'smtp.zoho.in',
        // port: 465,
        // secure: true,
        // auth: {
        //     user: 'marketing@theartw.com',
        //     pass: 'fDiG4jxUIGP7'
        // }
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 443,
        secure: true,
        auth: {
            user: 'ishitarathokre@questglt.org.com',
            pass: 'ishita@12'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
        },
    });


    // const smtpTransport = nodemailer.createTransport(smtpTransport2({
    //     port: 465,
    //     // host: 'mail.ebtico.com',
    //     auth: {
    //       user: 'ishitarathokre@questglt.org.com',
    //       pass: 'ishita@12'
    //     },
    //     tls: {
    //       rejectUnauthorized: false
    //     }
    //   }));

    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mailOptions, function (err, result) {
            if (err) {
                console.log(err)
                reject(0);
            }
            else {
                resolve(1)
            }
        })
    })
}

module.exports = {
    mail,
}
