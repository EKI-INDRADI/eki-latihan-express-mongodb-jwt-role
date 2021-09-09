
const log_cluster_model = require('./models/log-cluster.models');
const log_model = require('./models/log.models');
const error_model = require('./models/error.models');
const jwt_signup_model = require('./models/jwt-signup.models');
const jwt_signin_model = require('./models/jwt-signin.models');
const pasien_model = require('./models/pasien.models');
const security_swagger_v3 = require('./security/security-swagger-v3');
const jwt_token_model = require('./models/jwt-token.models');
module.exports = {
    components: {
        ...security_swagger_v3,
        schemas: {
            ...jwt_token_model,
            ...jwt_signin_model,
            ...jwt_signup_model,
            ...log_model,
            ...log_cluster_model,
            ...pasien_model,
            ...error_model
        }
    }
}