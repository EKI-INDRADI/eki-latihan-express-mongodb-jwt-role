module.exports = app => {
  const EKI_ANTRIAN = require("../controllers/antrian.controller");

  var router = require("express").Router();

  router.post("/", EKI_ANTRIAN.create);
  router.get("/", EKI_ANTRIAN.findAll);
  router.get("/:id", EKI_ANTRIAN.findOne);

  // router.delete("/:id", EKI_PASIEN.delete);
  router.delete("/", EKI_ANTRIAN.deleteAll);
  app.use("/api/antrian", router);
};
