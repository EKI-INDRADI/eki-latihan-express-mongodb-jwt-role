const pasien_create = require('../controllers/pasien/create.controllers');

module.exports = {
        '/api/pasien':{
            ...pasien_create
        }
}