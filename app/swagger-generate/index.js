
const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const routes = require('./routes');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...routes,
};