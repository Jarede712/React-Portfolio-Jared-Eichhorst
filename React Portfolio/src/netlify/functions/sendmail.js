const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async function (event, context) {
  const { name, email, message } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: email,
    to: 'jaredeichhorst@gmail.com',
    subject: `New message from ${name}`,
    text: message,
  };

  let info = await transporter.sendMail(mailOptions);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Email sent' }),
  };
};
