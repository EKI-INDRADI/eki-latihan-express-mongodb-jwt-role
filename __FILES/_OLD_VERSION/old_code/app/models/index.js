// =============================== CONNECTION STRING 
const dbConfig = require("../config/db.config");
// =============================== CONNECTION STRING 


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

// =============================== CONNECTION BY VAR +  STRING 
db.mongoose = mongoose;
// =============================== CONNECTION BY VAR +  STRING 

// =============================== CONNECTION STRING 
// db.url = dbConfig.url;
// =============================== CONNECTION STRING 

db.EKI_ANTRIAN = require("./antrian.model")(mongoose);
db.EKI_PASIEN = require("./pasien.model")(mongoose);

// ===================================== JWT MODULE
db.user = require("./user.model");
db.role = require("./role.model");

// =============================== JWT ADMIN ROLE
db.ROLES = ["user", "admin", "moderator"];
// =============================== JWT ADMIN ROLE
// ===================================== JWT MODULE
module.exports = db;
