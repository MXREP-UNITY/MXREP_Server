const sendEmailUseCase = require('../../usecases/sendEmail.usecase');

exports.sendEmail = async (req, res) => {
    const { email } = req.body;
    await sendEmailUseCase.execute({ email });
    res.json({ message: "Email sent" });
};