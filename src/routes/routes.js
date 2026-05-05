const express = require("express");
const routes = express.Router();

const loginRoutes = require("./login/login.routes.js");
const sendEmailRoutes = require("./sendEmail/sendEmail.routes.js")

routes.get("/", (req, res) => {
  console.log("get");
  res.status(200);
});
routes.post("/login", loginRoutes);
routes.use("/send-email", sendEmailRoutes);

module.exports = routes;
