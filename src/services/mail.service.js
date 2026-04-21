const nodemailer = require('nodemailer');
const { MAIL_CONSTANTS } = require('../constants/mail.constant');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.sendResultsMail = async (to) => {
  const mailOptions = {
    from: MAIL_CONSTANTS.FROM,
    to,
    subject: MAIL_CONSTANTS.SUBJECT,
    html: `
      <h2>Resultados de la simulación</h2>
    `,
  };

  return transporter.sendMail(mailOptions);
};