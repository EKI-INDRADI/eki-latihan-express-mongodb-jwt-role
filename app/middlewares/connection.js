exports.mongodb = function () {
    
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

// =============================== JWT ROLE
const services_jwt_role = require("./jwtRoles");
// =============================== /JWT ROLE

// =============================== CONNECTION BY VAR
const db = require("../models");
const dbConfig = require("../config/db.config");

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    // console.log("Successfully connect to MongoDB.");
    // ===================================== JWT MODULE - ADMIN ROLE
    services_jwt_role.initial();
    // ===================================== JWT MODULE - ADMIN ROLE
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
// =============================== CONNECTION BY VAR
}