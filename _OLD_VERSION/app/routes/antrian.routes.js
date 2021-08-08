
// ===================================== UPDATE 10-05-2021 JWT MODULE
const { authJwt } = require("../middlewares");

// ===================================== UPDATE 10-05-2021 JWT MODULE

module.exports = app => {
  const EKI_ANTRIAN = require("../controllers/antrian.controller");

  var router = require("express").Router();


  // ===================================== ORIGIN

  // router.post("/", EKI_ANTRIAN.create);
  // router.get("/", EKI_ANTRIAN.findAll);
  // router.get("/:id", EKI_ANTRIAN.findOne);

  // NOT USED // router.delete("/:id", EKI_PASIEN.delete);

  // router.delete("/", EKI_ANTRIAN.deleteAll);

  // ===================================== ORIGIN


  // ===================================== UPDATE 10-05-2021 JWT MODULE
  // JWT ENABLE
  // MODERATOR ONLY
  router.post("/", [authJwt.verifyToken, authJwt.isModerator], EKI_ANTRIAN.create);
  router.get("/", [authJwt.verifyToken, authJwt.isModerator], EKI_ANTRIAN.findAll);
  router.get("/:id", [authJwt.verifyToken, authJwt.isModerator], EKI_ANTRIAN.findOne);
  router.delete("/", [authJwt.verifyToken, authJwt.isModerator], EKI_ANTRIAN.deleteAll);
  // ===================================== UPDATE 10-05-2021 JWT MODULE





  // ===================================== ORIGIN
  // app.use("/api/antrian", router);
  // ===================================== ORIGIN

  // ===================================== UPDATE 10-05-2021 JWT MODULE

  // CREATE TOKEN HEADER x-access-token
  app.use("/api/antrian", router, function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // ===================================== UPDATE 10-05-2021 JWT MODULE
};
