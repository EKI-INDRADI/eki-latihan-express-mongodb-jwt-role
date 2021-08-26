const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const compression = require('compression')


var corsOptions = {
  //origin: "http://localhost:4200"
  origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//=========== update performance
app.use(compression())
app.disable('etag')
app.disable('x-powered-by')
//=========== /update performance

let morgan_middleware = require("./morgan")
app.use(morgan_middleware)

let connection = require("./connection")
connection.mongodb()



exports.PORT_APP = 8080

exports.app_middleware = function (base_dir) {

  global.__basedir = base_dir

  app.get("/", (req, res) => {
    res.json({ message: "Backend OK" });
  });

  require("../routes/pasien.routes")(app);
  require("../routes/antrian.routes")(app);

  // ===================================== JWT MODULE - ADMIN ROLE
  require("../routes/auth.routes")(app);
  require("../routes/user.routes")(app);
  // ===================================== JWT MODULE - ADMIN ROLE

  // ===================================== FILE UPLOAD
  require("../routes/fileUpload.routes")(app);
  // ===================================== FILE UPLOAD

  // ===================================== SYSTEM LOG
  require("../routes/log.routes")(app);
  require("../routes/logCluster.routes")(app);
  // ===================================== SYSTEM LOG

  // ===================================== DYNAMIC VALIDATION
  require("../routes/dynamicValidation.routes")(app);
  // ===================================== DYNAMIC VALIDATION


  //====================================== SWAGGER
  require("../routes/swagger.routes")(app);
  //====================================== SWAGGER

  const PORT = process.env.PORT_APP || exports.PORT_APP;
  app.listen(PORT, () => {
    // console.log(`Server is running on port ${PORT}.`);

    // console.log(` Application running on port : ${PORT}  - [PID : ${process.pid}]`);
  });

}