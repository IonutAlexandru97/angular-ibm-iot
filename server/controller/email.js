var nodeMailer = require('nodemailer');

module.exports.resetEmail = (req, res, next) => {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ionutalexandru618@gmail.com',
            pass: 'subatomizat12345'
        }
    });

    let mailOptions = {
        to: req.body.email,
        subject: 'Password reset',
        text: 'Here should be a reset token!'
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return console.log(error);
        }
        console.log ('Message %s sent:  %s', info.messageId, info.response);
        res.end();
    });
}
