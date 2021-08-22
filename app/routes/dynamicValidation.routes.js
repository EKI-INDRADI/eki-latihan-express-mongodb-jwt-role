
// ===================================== UPDATE 21-08-2021 JWT MODULE
// const { authJwt } = require("../middlewares/authJwt");
// ===================================== UPDATE 21-08-2021 JWT MODULE

module.exports = app => {
    const controller = require("../controllers/dynamicValidation.controller");
    let router = require("express").Router();

    // ===================================== UPDATE 21-08-2021 JWT MODULE


    router.post("/", controller.dynamicValidation);
    router.post("/detail", controller.dynamicValidation_detail);

    // USER ROLE
    // router.post("/", [authJwt.verifyToken], controller.dynamicValidation);

    // MODERATOR ROLE
    // router.post("/", [authJwt.verifyToken, authJwt.isModerator], controller.dynamicValidation);

    // ADMIN ROLE
    // router.post("/", [authJwt.verifyToken, authJwt.isAdmin], controller.dynamicValidation);
    // ===================================== UPDATE 21-08-2021 JWT MODULE

    // ===================================== UPDATE 21-08-2021 JWT MODULE
    // CREATE TOKEN HEADER x-access-token
    app.use("/api/dynamic-validation", router, function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
            // "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    // ===================================== UPDATE 21-08-2021 JWT MODULE
};
