const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const swaggerUi = require('swagger-ui-express'); // https://www.npmjs.com/package/swagger-ui-express
const swaggerDocument = require('./../../swagger.json'); // https://editor.swagger.io/

var corsOptions = {
  //origin: "http://localhost:4200"
  origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

exports.PORT_SWAGGER = 7000

exports.swagger_middleware = function () {

  // var options = {
  //   explorer: true
  // };

  // app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
   app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  // app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  const PORT = process.env.PORT_SWAGGER || exports.PORT_SWAGGER;
  app.listen(PORT, () => {
    // console.log(`Server is running on port ${PORT}.`);
    // console.log(` Application running on port : ${PORT}  - [PID : ${process.pid}]`);
  });
}