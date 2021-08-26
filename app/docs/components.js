
const log_cluster_model = require('./models/log-cluster.models');
const log_model = require('./models/log.models');
const error_model = require('./models/error.models');
module.exports = {
    components: {
        schemas: {
            ...log_cluster_model,
            ...log_model,
            ...error_model
            // Error: {
            //     type: 'object',
            //     properties: {
            //         message: {
            //             type: 'string'
            //         },
            //         internal_code: {
            //             type: 'string'
            //         }
            //     }
            // }
        }
    }
}