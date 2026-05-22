const express = require("express");
const router = express.Router();
const controller = require("../controllers/xls.controller")

router.get("/", controller)

module.exports = router;
