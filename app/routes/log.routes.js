module.exports = app => {
  const log = require("../controllers/log.controller");

  var router = require("express").Router();

  router.post("/create", log.createLog);


  
  router.post("/",  (req, res) => {
    res.json({ message: "File log ok" });
  });

  // ===================================== UPDATE 10-05-2021 JWT MODULE
  // CREATE TOKEN HEADER x-access-token
  app.use("/api/log", router, function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
      // "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  // ===================================== UPDATE 10-05-2021 JWT MODULE
};
