
const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
 const routes = require('./routes');
// const routes_log = require('./routes/log.routes');
// const routes_log_cluster = require('./routes/log-cluster.routes');
// const todos = require('./todos');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...routes,
    // ...routes_log,
    // ...routes_log_cluster,
};