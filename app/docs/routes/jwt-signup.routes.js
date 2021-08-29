const jwt_signup = require('../controllers/jwt-signup/create.controllers');

module.exports = {
    '/api/auth/signup': {
        ...jwt_signup
    }
}