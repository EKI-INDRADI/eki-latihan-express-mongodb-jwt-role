const jwt_token = require('../controllers/jwt-token/create.controllers');

module.exports = {
    '/api/token': {
        ...jwt_token
    }
}