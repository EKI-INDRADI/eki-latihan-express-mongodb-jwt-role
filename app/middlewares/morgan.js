
const morgan = require('morgan');
const chalk = require('chalk');

module.exports = morgan(function (tokens, req, res) {
    let status = tokens.status(req, res)
    let statusColor = status >= 500 ? 'red'
        : status >= 400 ? 'yellow'
            : status >= 300 ? 'cyan'
                : 'green'


    let response_time = tokens['response-time'](req, res)
    let response_time_color = response_time >= 10 ? 'red'
        : response_time >= 5 ? 'yellow'
            : response_time >= 2.5 ? 'cyan'
                : 'green'

    let content_length = tokens.res(req, res, 'content-length')
    let content_length_color = content_length >= 500 ? 'red'
        : content_length >= 200? 'yellow'
            : content_length >= 100 ? 'cyan'
                : 'green'

    let res_json = chalk.reset(padRight(chalk.bold.green(tokens.method(req, res)) + ' ' + chalk.bold(tokens.url(req, res)), 80))
        + ' [status-code] = ' + chalk.bold[statusColor](status)
        + '' + chalk.reset(',')
        + ' [response-time] = ' + chalk.bold[response_time_color](padLeft(tokens['response-time'](req, res) + ' ms', 8))
        + '' + chalk.reset(',')
        + ' [content-length] = ' +chalk.bold[content_length_color](tokens.res(req, res, 'content-length'))

    return res_json

});



function padLeft(str, len) {
    return len > str.length
        ? (new Array(len - str.length + 1)).join(' ') + str
        : str
}
function padRight(str, len) {
    return len > str.length
        ? str + (new Array(len - str.length + 1)).join(' ')
        : str
}