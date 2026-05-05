const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: '#',
    pass: '#',
  },
  tls: {
    rejectUnauthorized: false // 
  }
});

exports.sendResultsMail = async (to) => {
  const mailOptions = {
    from:'"Simulador" <no-reply@tusimulador.com>',
    to,
    subject: 'Resultados de tu partida',
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #ffffff; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #1e3a8a; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(90deg, #1e3a8a, #2563eb); padding: 20px; text-align: center;">
            <h1 style="margin: 0; color: #ffffff !important;">Simulador</h1>
            <p style="margin: 5px 0 0; color: #ffffff !important;">Resultados de tu partida</p>
          </div>

          <!-- Body -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff;">
            <tr>
              <td style="padding: 25px;">
                <h2 style="color: #1e40af !important; margin-top: 0;">¡Tus resultados están listos!</h2>
                <p style="color: #333333 !important; margin: 0 0 10px;">Hola,</p>
                <p style="color: #333333 !important; margin: 0 0 10px;">Hemos generado el reporte de tu simulación.</p>
                <table width="100%" cellpadding="15" cellspacing="0" style="background-color: #e0ecff; border-radius: 8px; margin: 20px 0;">
                  <tr>
                    <td style="color: #333333 !important;">
                      <strong style="color: #333333 !important;">Correo:</strong> ${to}
                    </td>
                  </tr>
                </table>
                <p style="color: #333333 !important; margin: 0 0 10px;">
                  Encontrarás el archivo <strong style="color: #333333 !important;">reporte.xlsx</strong> adjunto en este correo.
                </p>
                <p style="font-size: 14px; color: #666666 !important; margin: 20px 0 0;">
                  Si no realizaste esta solicitud, puedes ignorar este mensaje.
                </p>
              </td>
            </tr>
          </table>

        </div>
      </div>
    `,
    attachments: [
        {
            filename: 'reporte.xlsx',
            path: path.join(__dirname, '../..' ,'Simulacion.xlsx')
        }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Mensaje enviado: %s', info.messageId);
});
};