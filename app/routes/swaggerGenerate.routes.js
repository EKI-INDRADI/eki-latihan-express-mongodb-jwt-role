module.exports = app => {
  const controller = require("../controllers/swaggerGenerate.controller");

  var router = require("express").Router();

  router.post("/generate", controller.swaggerGenerate);


  
  router.post("/",  (req, res) => {
    res.json({ message: "swagger generate OK" });
  });

  // ===================================== UPDATE 10-05-2021 JWT MODULE
  // CREATE TOKEN HEADER x-access-token
  app.use("/api/swagger", router, function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
      // "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  // ===================================== UPDATE 10-05-2021 JWT MODULE
};
