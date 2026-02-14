const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./routes/routes.js");

app.use("/", routes);
const port = process.env.PORT ?? "3000";

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
