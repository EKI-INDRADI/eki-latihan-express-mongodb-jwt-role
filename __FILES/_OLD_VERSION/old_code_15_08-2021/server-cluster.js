

// ===================================== FILE UPLOAD
let global_base_dir = global.__basedir = __dirname;
// ===================================== FILE UPLOAD


let app = require("./app/middlewares/app"); 
let swagger = require("./app/middlewares/swagger")
// ================ ENABLE MULTI THREADS
let cluster = require("./app/middlewares/cluster");
cluster(() => {
  app.app_middleware(global_base_dir)
  swagger.swagger_middleware()
});

// ================/ ENABLE MULTI THREADS