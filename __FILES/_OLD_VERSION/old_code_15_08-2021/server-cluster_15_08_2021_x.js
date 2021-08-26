const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// var morgan = require('morgan');
const app = express();


// ===================================== FILE UPLOAD
let global_base_dir = global.__basedir = __dirname;
// ===================================== FILE UPLOAD

var corsOptions = {
  //origin: "http://localhost:4200"
  origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let morgan_middleware = require("./app/middlewares/morgan")
app.use(morgan_middleware)

let connection = require("./app/middlewares/connection")
connection.mongodb()


// let running = require("./app/middlewares/running"); // NOT USED
// ================ ENABLE MULTI THREADS
let cluster = require("./app/middlewares/cluster");
cluster(() => {

  //  running.app()  // NOT USED


  app.get("/", (req, res) => {
    res.json({ message: "Backend OK" });
  });

  require("./app/routes/pasien.routes")(app);
  require("./app/routes/antrian.routes")(app);

  // ===================================== JWT MODULE - ADMIN ROLE
  require("./app/routes/auth.routes")(app);
  require("./app/routes/user.routes")(app);
  // ===================================== JWT MODULE - ADMIN ROLE

  // ===================================== FILE UPLOAD
  require("./app/routes/fileUpload.routes")(app);
  // ===================================== FILE UPLOAD

  // ===================================== SYSTEM LOG
  require("./app/routes/log.routes")(app);
  require("./app/routes/logCluster.routes")(app);
  // ===================================== SYSTEM LOG


  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    // console.log(`Server is running on port ${PORT}.`);
    // console.log(` Application running on port : ${PORT}  - [PID : ${process.pid}]`);
  });

});
// ================/ ENABLE MULTI THREADS