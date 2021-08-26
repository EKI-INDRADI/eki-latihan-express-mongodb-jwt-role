
const log_cluster = require('./log-cluster.routes');
const log = require('./log.routes');
// const todos = require('./todos');

module.exports = {
    paths: {
        ...log_cluster,
        ...log,
    }
    // ...log_cluster,
    // ...log
    // ...todos
};