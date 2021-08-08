// ===================================== JWT MODULE - ADMIN ROLE


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

// ----- recomended


// ===================================== JWT MODULE - ADMIN ROLE

const db = require("../models");
const Role = db.role;

// ===================================== JWT MODULE - ADMIN ROLE
// async function () {
exports.initial = function () {
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