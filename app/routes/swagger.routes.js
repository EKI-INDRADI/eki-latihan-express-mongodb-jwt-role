
const swaggerUI = require("swagger-ui-express");

module.exports = app => {

    const docs = require('../docs');
// const docs = require('../docs2/swagger.json')
    var router = require("express").Router();

    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));


    // ===================================== UPDATE 10-05-2021 JWT MODULE

    
    // router.get("/swagger", swaggerUI.serve, swaggerUI.setup(docs));

    
    // CREATE TOKEN HEADER x-access-token


    // app.use("/doc", router, function (req, res, next) {
    //     res.header(
    //         "Access-Control-Allow-Headers",
    //         "Origin, Content-Type, Accept"
    //         // "x-access-token, Origin, Content-Type, Accept"
    //     );
    //     next();
    // });
    // ===================================== UPDATE 10-05-2021 JWT MODULE
};
