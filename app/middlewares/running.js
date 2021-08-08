
const express = require("express");
const app = express();


exports.app = function () {

  app.get("/", (req, res) => {
    res.json({ message: "Backend OK" });
  });

  require("../../app/routes/pasien.routes")(app);
  require("../../app/routes/antrian.routes")(app);

  // ===================================== JWT MODULE - ADMIN ROLE
  require("../../app/routes/auth.routes")(app);
  require("../../app/routes/user.routes")(app);
  // ===================================== JWT MODULE - ADMIN ROLE

  // ===================================== FILE UPLOAD
  require("../../app/routes/fileUpload.routes")(app);
  // ===================================== FILE UPLOAD

  // ===================================== SYSTEM LOG
  require("../../app/routes/log.routes")(app);
  require("../../app/routes/logCluster.routes")(app);
  // ===================================== SYSTEM LOG



  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    // console.log(`Server is running on port ${PORT}.`);

    console.log(` Application running on port : ${PORT}  - [PID : ${process.pid}]`);
  });



}