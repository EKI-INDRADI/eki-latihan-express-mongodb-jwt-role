module.exports = app => {
  const log = require("../controllers/logCluster.controller");

  var router = require("express").Router();

  router.post("/create", log.createLog);

  // ===================================== UPDATE 10-05-2021 JWT MODULE
  // CREATE TOKEN HEADER x-access-token
  app.use("/api/log-cluster", router, function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
      // "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  // ===================================== UPDATE 10-05-2021 JWT MODULE
};
