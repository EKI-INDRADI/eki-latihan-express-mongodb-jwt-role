module.exports = app => {
    const controllers = require("../controllers/notification.controller");
  
    var router = require("express").Router();
  
    router.post("/send", controllers.send_notification);
  
    router.post("/",  (req, res) => {
      res.json({ message: "File log ok" });
    });
  
    // ===================================== UPDATE 10-05-2021 JWT MODULE
    // CREATE TOKEN HEADER x-access-token
    app.use("/api/notification", router, function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
        // "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
  
    // ===================================== UPDATE 10-05-2021 JWT MODULE
  };
  