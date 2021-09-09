const jwt_signin = require('../controllers/jwt-signin/create.controllers');

module.exports = {
    '/api/auth/signin': {
        ...jwt_signin
    }
}