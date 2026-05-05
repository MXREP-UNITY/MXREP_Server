const express = require("express");
const routes = express.Router();

const sendEmailController = require("../../controller/sendEmail/sendEmail.controller");

routes.post("/", sendEmailController.sendEmail);

module.exports = routes;

