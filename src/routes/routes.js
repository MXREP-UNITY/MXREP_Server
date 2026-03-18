const express = require("express");
const routes = express.Router();

const loginRoutes = require("./login/login.routes.js");
const apiRoutes = require("./index.js");

routes.get("/", (req, res) => {
  console.log("get");
  res.status(200);
});
routes.post("/login", loginRoutes);
routes.use("/api", apiRoutes);

module.exports = routes;
