require("dotenv").config();

var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS

    }
})

// send out mail

var mailOptions = {
    from: '2as1910100@gmail.com',
    to: 'anushthaniranjan@Gmail.com',
    subject: 'Welcome',
    text: 'Kya lagta h, kaam ban jayega?'
}

transport.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error)
    } else {
        console.log("Email sent" + info.response)
    }
})