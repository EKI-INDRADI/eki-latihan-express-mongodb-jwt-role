
// ===================================== UPDATE 10-05-2021 JWT MODULE
const { authJwt } = require("../middlewares");

// ===================================== UPDATE 10-05-2021 JWT MODULE



module.exports = app => {
  const EKI_PASIEN = require("../controllers/pasien.controller");

  var router = require("express").Router();

  // ===================================== ORIGIN

  // router.post("/", EKI_PASIEN.create);
  // router.get("/", EKI_PASIEN.findAll);
  // router.get("/name/:cari_value", EKI_PASIEN.findName);
  // router.get("/:id", EKI_PASIEN.findOne);
  // router.put("/:id", EKI_PASIEN.update);
  // router.delete("/:id", EKI_PASIEN.delete);
  // router.delete("/", EKI_PASIEN.deleteAll);

  // ===================================== ORIGIN


  // ===================================== UPDATE 10-05-2021 JWT MODULE
  // USER ROLE
  router.get("/", [authJwt.verifyToken], EKI_PASIEN.findAll);
  router.get("/name/:cari_value", [authJwt.verifyToken], EKI_PASIEN.findName);
  router.get("/:id", [authJwt.verifyToken], EKI_PASIEN.findOne);

  // MODERATOR ROLE
  router.post("/", [authJwt.verifyToken, authJwt.isModerator], EKI_PASIEN.create);
  router.put("/:id", [authJwt.verifyToken, authJwt.isModerator], EKI_PASIEN.update);

  // ADMIN ROLE
  router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], EKI_PASIEN.delete);
  router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], EKI_PASIEN.deleteAll);
  // ===================================== UPDATE 10-05-2021 JWT MODULE



  // ===================================== ORIGIN
  // app.use("/api/pasien", router);
  // ===================================== ORIGIN


  // ===================================== UPDATE 10-05-2021 JWT MODULE
  // CREATE TOKEN HEADER x-access-token
  app.use("/api/pasien", router, function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  // ===================================== UPDATE 10-05-2021 JWT MODULE
};
