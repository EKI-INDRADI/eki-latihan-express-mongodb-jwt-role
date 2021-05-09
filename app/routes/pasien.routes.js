module.exports = app => {
    const EKI_PASIEN = require("../controllers/pasien.controller");
  
    var router = require("express").Router();
  
    router.post("/", EKI_PASIEN.create);
    router.get("/", EKI_PASIEN.findAll);
    router.get("/name/:cari_value", EKI_PASIEN.findName);
    router.get("/:id", EKI_PASIEN.findOne);
    router.put("/:id", EKI_PASIEN.update);
    router.delete("/:id", EKI_PASIEN.delete);
    router.delete("/", EKI_PASIEN.deleteAll);
    app.use("/api/pasien", router);
  };
  