const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;



let new_file_name_ext = "";


let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/DATA/FILE/ALL/");
  },
  filename: (req, file, cb) => {


    console.log(file.originalname);

    // =================== ORIGIN
    // cb(null, file.originalname);
    // =================== ORIGIN


    // =================== 10.05.2021 auto generate file
    // https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
    // let d = new Date(date)
    // let month = '' + (d.getMonth() + 1)
    // let day = '' + d.getDate()
    // let year = d.getFullYear()


    // Date.now() + '-' + file.filename + file.mimetype

    // cb(null, Date.now() + '-' + file.originalname);  // OK

    // https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-3.php

    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }

    if (mm < 10) {
      mm = `0${mm}`;
    }

    // https://www.w3schools.com/Jsref/jsref_getminutes.asp

    let Hours = today.getHours();
    let Minutes = today.getMinutes()
    let Seconds = today.getSeconds()
    // let Milliseconds = today.getMilliseconds()


    today = `${mm}-${dd}-${yyyy}-${Hours}${Minutes}${Seconds}`;



    new_file_name_ext = today + '-' + file.originalname

    cb(null, new_file_name_ext);  // OK

    // =================== 10.05.2021 auto generate file


    // EKI NOTE :
    // file.originalname = nama file + ekstensi
    // file.filename = nama file doang
    // file.mimetype = ekstensi doang

  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
