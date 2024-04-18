const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async function (event, context) {
  const { name, email, message } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
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
