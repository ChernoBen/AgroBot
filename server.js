/* eslint-disable linebreak-style */
require('dotenv/config');
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./src/routes/routes");
const keys = require("./src/config/config");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

const options = {
	customCss: ".swagger-ui .topbar { display: none }",
	customSiteTitle: "AgroBot",
	explorer:true
};

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile,options));
app.use(routes);

app.listen(process.env.PORT ||3000,'0.0.0.0',function() {
  console.log("Server started......."+keys.apiPort)
});