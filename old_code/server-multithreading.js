const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// =============================== CONNECTION BY VAR
const dbConfig = require("./app/config/db.config");
// =============================== CONNECTION BY VAR

// =============================== LIMIT REQUEST
const rateLimit = require("express-rate-limit");
// =============================== LIMIT REQUEST


// ================ ENABLE MULTI THREADS
const cluster = require("cluster");
const totalCPUs = require('os').cpus().length;



if (cluster.isMaster) {

  console.log(`Total Number of CPU threads is ${totalCPUs}`);

  for (var i = 0; i < totalCPUs; i++) {
    cluster.fork(); // cluster fork method (menggabungkan proses nodejs menjadi cluster)
  }
  cluster.on("online", worker => {
    console.log(`Worker Id is ${worker.id} and PID is ${worker.process.pid}`);
  });
  cluster.on("exit", worker => {
    console.log(`Worker Id ${worker.id} and PID is ${worker.process.pid} is offline`);
    console.log("Let's fork new worker!");
    cluster.fork();
  });
}
else {
  const app = express();

  console.log(`Worker Process Id - ${cluster.worker.process.pid} has accepted the request!`);



  // ================ ENABLE MULTI THREADS




  // ===================================== FILE UPLOAD
  global.__basedir = __dirname;
  // ===================================== FILE UPLOAD

  var corsOptions = {
    //origin: "http://localhost:4200"
    origin: "*"
  };

  app.use(cors(corsOptions));

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));


  const db = require("./app/models");

  // ===================================== JWT MODULE - ADMIN ROLE
  const Role = db.role;

  // ===================================== JWT MODULE - ADMIN ROLE



  // =============================== CONNECTION STRING 
  // db.mongoose
  //   .connect(db.url, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true
  //   })
  //   .then(() => {
  //     console.log("Connected to the database!");
  //   })
  //   .catch(err => {
  //     console.log("Cannot connect to the database!", err);
  //     process.exit();
  //   });
  // =============================== CONNECTION STRING 


  // =============================== CONNECTION BY VAR
  db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Successfully connect to MongoDB.");

      // ===================================== JWT MODULE - ADMIN ROLE
      initial();
      // ===================================== JWT MODULE - ADMIN ROLE
    })
    .catch(err => {
      console.error("Connection error", err);
      process.exit();
    });
  // =============================== CONNECTION BY VAR


  const enable_rate_limit_1sec_per_second = rateLimit({
    // windowMs: 60 * 60 * 1000, // 1 hour window
    // max: 5, // start blocking after 5 requests
    // message:
    //   "Too many accounts created from this IP, please try again after an hour"

    windowMs: 1000, // 1 second
    max: 1, // start blocking after 1 requests
    message:
      { status: 0, request_limit: "block", message: "Too many request from this IP, please try again after an second" }
  });






  // 16-june-2021 ============ enable rate limit



  // ---------- global rate limit
  app.use(enable_rate_limit_1sec_per_second);
  // ---------- / global rate limit

  // ----------  spesific rate limit
  // app.get("/rate-limit",enable_rate_limit_1sec_per_second,  (req, res) => {
  //   res.json({ message: "Rate limit  1 sec OK" });
  // });
  // ---------- / spesific rate limit
  // 16-june-2021 ============ enable rate limit


  app.get("/", (req, res) => {
    res.json({ message: "Backend OK" });
  });

  require("./app/routes/pasien.routes")(app);
  require("./app/routes/antrian.routes")(app);
  // ===================================== JWT MODULE - ADMIN ROLE
  require("./app/routes/auth.routes")(app);
  require("./app/routes/user.routes")(app);
  // ===================================== JWT MODULE - ADMIN ROLE

  // ===================================== FILE UPLOAD
  require("./app/routes/fileUpload.routes")(app);
  // ===================================== FILE UPLOAD




  // ============================== Referensi
  // Referensi : 
  // https://bezkoder.com/category/node-js/
  // https://bezkoder.com/node-js-mongodb-auth-jwt/
  // Programmer Zaman Now Vlog - Eko Kurniawan Khannedy (https://www.youtube.com/watch?v=3PMLwe_C-F0&list=PL-CtdCApEFH-aVPPDMSfNmKVZghCyGpBQ)
  // https://www.udemy.com/course/mongodb-the-complete-developers-guide
  // https://www.udemy.com/course/node-js-cluster
  // 


  // cara ubah ROLE_USER ke ROLE_ADMIN / role_moderates  (not recomended)
  // untuk create pake signup , defaultnya ROLE_USER
  // nanti di ganti di sesuaikan pada collections roles lihat roles id nya
  // pada collections users  ganti  roles id nya


  // atau

  // insert signupnya gini :

  // ----- recomended

  // POST http://localhost:8080/api/auth/signup

  // {   
  //   "username": "ekiindradi2",
  //   "email" : "user@gmail.com",
  //   "password": "masuk123"
  //   }

  // POST http://localhost:8080/api/auth/signup

  // {   
  //   "username": "moderator",
  //   "email" : "moderator@gmail.com",
  //   "password": "masuk123",
  //   "roles" : ["user", "moderator"]
  //   }

  // POST http://localhost:8080/api/auth/signup

  // {   
  //   "username": "admin2",
  //   "email" : "admin2@gmail.com",
  //   "password": "masuk123",
  //   "roles" : ["user", "moderator" , "admin"]
  //   }

  // atau bisa juga (not recomended)

  // {   
  //   "username": "admin2",
  //   "email" : "admin2@gmail.com",
  //   "password": "masuk123",
  //   "roles" : ["admin"]
  //   }

  // ----- recomended


  // kondisi 

  // admin = bisa akses moderator dan user
  // moderator = bisa akses moderator dan user
  // user = cuma bs user





  /// example express file upload referensi :

  // https://github.com/bezkoder?tab=repositories&q=express&type=&language=&sort=
  // https://github.com/bezkoder/express-file-upload
  // https://github.com/bezkoder/node-js-upload-image-mongodb
  // https://github.com/bezkoder/node-js-express-download-file
  // https://github.com/bezkoder/node-js-download-csv-file
  // ============================== EKI INFO 

  // const PORT = process.env.PORT || 8080;
  // app.listen(PORT, () => {
  //   console.log(`Server is running on port ${PORT}.`);
  // });






  // ===================================== JWT MODULE - ADMIN ROLE

  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }

          console.log("added 'user' to roles collection");
        });

        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }

          console.log("added 'moderator' to roles collection");
        });

        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }

          console.log("added 'admin' to roles collection");
        });
      }
    });
  }

  // ===================================== JWT MODULE - ADMIN ROLE






  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

}
// ================/ ENABLE MULTI THREADS