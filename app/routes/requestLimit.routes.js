
// ===================================== UPDATE 10-05-2021 JWT MODULE
const { authJwt } = require("../middlewares");
// ===================================== UPDATE 10-05-2021 JWT MODULE

module.exports = app => {
  const controller = require("../controllers/requestLimit.controller")
  var router = require("express").Router();

  // ===================================== UPDATE 10-05-2021 JWT MODULE
  // USER ROLE
  router.post("/test", [authJwt.verifyToken], controller.requestLimit);

  // MODERATOR ROLE
  //   router.post("/test", [authJwt.verifyToken, authJwt.isModerator], controller.requestLimit);

  // ADMIN ROLE
  //   router.post("/test", [authJwt.verifyToken, authJwt.isAdmin], controller.requestLimit);
  // ===================================== UPDATE 10-05-2021 JWT MODULE

  // ===================================== UPDATE 10-05-2021 JWT MODULE
  // CREATE TOKEN HEADER x-access-token
  app.use("/api/rate-limit", router, function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // ===================================== UPDATE 10-05-2021 JWT MODULE
};
