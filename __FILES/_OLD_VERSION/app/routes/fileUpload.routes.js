
// ===================================== UPDATE 10-05-2021 JWT MODULE
const { authJwt } = require("../middlewares");
// ===================================== UPDATE 10-05-2021 JWT MODULE

const express = require("express");
const router = express.Router();
const controller = require("../controllers/fileUpload.controller");

let routes = (app) => {
  router.post("/upload", [authJwt.verifyToken] ,controller.upload);
  router.get("/files", [authJwt.verifyToken] ,controller.getListFiles);
  router.get("/files/:name", [authJwt.verifyToken] ,controller.download);

  app.use(router);
};

module.exports = routes;
