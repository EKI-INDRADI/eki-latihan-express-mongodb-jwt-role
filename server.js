const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// =============================== CONNECTION BY VAR
const dbConfig = require("./app/config/db.config");
// =============================== CONNECTION BY VAR

const app = express();

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



app.get("/", (req, res) => {
  res.json({ message: "Backend OK" });
});

require("./app/routes/pasien.routes")(app);
require("./app/routes/antrian.routes")(app);
// ===================================== JWT MODULE - ADMIN ROLE
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
// ===================================== JWT MODULE - ADMIN ROLE


// ============================== EKI INFO 
// ngikutin tutorial dari : 
// https://bezkoder.com/category/node-js/
// https://bezkoder.com/node-js-mongodb-auth-jwt/


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


// ============================== EKI INFO 

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});






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