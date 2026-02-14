const express = require("express");
const routes = express.Router();

const loginController = require("../../controller/login/login.controller.js");

routes.post("/login", loginController.login);

module.exports = routes;
