// ===================================== JWT MODULE
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  // header x-access-token,  <<<<<< di buat manual lho
  // untuk akses token

  // signin  headernya :
  // x-access-token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOTc4NzgxZjJhZjE4MDU0MGFjYzg4YSIsImlhdCI6MTYyMDU1MDMxNSwiZXhwIjoxNjIwNjM2NzE1fQ.CUxuBbVTK0f_pVt1SuXly7R092SV5FDeXwXssp5yahw


  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
  app.post("/api/token", controller.token);
};
// ===================================== JWT MODULE