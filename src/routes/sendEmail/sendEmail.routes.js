const express = require("express");
const routes = express.Router();

const sendEmailController = require("../../controller/sendEmail/sendEmail.controller");

routes.post("/send-email", sendEmailController.sendEmail);

module.exports = routes;
