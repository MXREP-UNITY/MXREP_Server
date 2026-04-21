const mailService = require('../services/mail.service');

exports.execute = async ({email}) => {
    await mailService.sendResultsMail(email);
};