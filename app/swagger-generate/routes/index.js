
const jwt_signup = require('./jwt-signup.routes');
const jwt_signin = require('./jwt-signin.routes');
const log_cluster = require('./log-cluster.routes');
const log = require('./log.routes');
const pasien = require('./pasien.routes');
const jwt_token = require('./jwt-token.routes');

module.exports = {
    paths: {
        ...jwt_token,
        ...jwt_signin,
        ...jwt_signup,
        ...log,
        ...log_cluster,
        ...pasien
    }
};