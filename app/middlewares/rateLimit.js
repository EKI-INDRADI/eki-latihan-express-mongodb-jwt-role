

let enable = process.env.ENABLE_RATE_LIMIT || false




if (enable == true) {

}

// =============================== LIMIT REQUEST
const rateLimit = require("express-rate-limit");
// =============================== LIMIT REQUEST
// =========================RATE LIMIT

// https://www.tabnine.com/code/javascript/modules/express-rate-limit (keyGenerator)
// https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client (request,response)
// https://medium.com/pixel-and-ink/rate-limiting-in-express-7a43ac14ed0c (skip)
// node_modules\express-rate-limit\lib (function documentation)

module.exports = rateLimit({

    // {
    //     windowMs: 60 * 1000, // milliseconds - how long to keep records of requests in memory
    //     max: 5, // max number of recent connections during `window` milliseconds before sending a 429 response
    //     message: "Too many requests, please try again later.",
    //     statusCode: 429, // 429 status = Too Many Requests (RFC 6585)
    //     headers: true, //Send custom rate limit header with limit and remaining
    //     draft_polli_ratelimit_headers: false, //Support for the new RateLimit standardization headers
    //     skipFailedRequests: false, // Do not count failed requests (status >= 400)
    //     skipSuccessfulRequests: false, // Do not count successful requests (status < 400)
    //     // allows to create custom keys (by default user IP is used)
    //     keyGenerator: function (req /*, res*/) {
    //       return req.ip;
    //     },
    //     skip: function (/*req, res*/) {
    //       return false;
    //     },
    //     handler: function (req, res /*, next*/) {
    //       res.status(options.statusCode).send(options.message);
    //     },
    //     onLimitReached: function (/*req, res, optionsUsed*/) {},
    //   }

    // https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client

    // res.writeContinue()
    // res.statusCode = 404
    // res.setHeader(name, value)
    // res.getHeader(name)
    // res.removeHeader(name)
    // res.header(key[, val]) (Express only)
    // res.charset = 'utf-8' (Express only; only affects Express-specific methods)
    // res.contentType(type) (Express only)
    // Response must be in Head and becomes Body:

    // res.writeHead(statusCode, [reasonPhrase], [headers])
    // Response can be in either Head/Body and remains in Body:

    // res.write(chunk, encoding='utf8')
    // Response can be in either Head/Body and becomes Finished:

    // res.end([data], [encoding])
    // Response can be in either Head/Body and remains in its current state:

    // res.addTrailers(headers)
    // Response must be in Head and becomes Finished:

    // return next([err]) (Connect/Express only)
    // Any exceptions within middleware function(req, res, next) (Connect/Express only)
    // res.send(body|status[, headers|status[, status]]) (Express only)
    // res.attachment(filename) (Express only)
    // res.sendfile(path[, options[, callback]]) (Express only)
    // res.json(obj[, headers|status[, status]]) (Express only)
    // res.redirect(url[, status]) (Express only)
    // res.cookie(name, val[, options]) (Express only)
    // res.clearCookie(name[, options]) (Express only)
    // res.render(view[, options[, fn]]) (Express only)
    // res.partial(view[, options]) (Express only)

    windowMs: 1000, // 1000 =  1 second // 60 * 60 * 1000, =  1 hour window
    max: 1, // 2 = 1 request user login + request data     start blocking after 5 requests
    skip: function (req /*, res*/) { // disable request limit
        //=============BEST PEROFMANCE CODE
        if (
            req.url == "/api/auth/signup" || // registration user
            req.url == "/api/auth/signin" || // login user
            req.url == "/api/token" ||  // login user (simple copy paste, paste for swagger)
            req.body.enable_rl == false ||
            !req.header("x-access-token") // no token = disable rate limit
        ) {
            return true // whitelist
        } else {
            return false // blacklist
        }

        // if (req.ip === yourIP) {
        //     return true
        // }
        // return false
        //=============BEST PEROFMANCE CODE

    },
    keyGenerator: function (req /*, res */) {

        //=============HIGH CODE
        // if (
        //     req.url == "/api/auth/signup" || // registration user
        //     req.url == "/api/auth/signin" || // login user
        //     req.url == "/api/token" ||  // login user (simple copy paste, paste for swagger)
        //     req.body.enable_rl == false
        // ) {
        //     return req.url + new Date().toISOString() // auto generate skip
        // } else {
        //     if (req.header("x-access-token")) {
        //         return req.header("x-access-token") // req.ip;  // request limit by token
        //     } else {
        //         return req.url + new Date().toISOString() // auto generate skip
        //     }
        // }
        //=============/HIGH CODE
        return req.header("x-access-token") // req.ip;  // request limit by token
        // return req.ip 
    },
    message:
        { statusCode: 0, request_limit: "block", message: "Too many request from this username, please try again after an second" }
})

    // ========================= / RATE LIMIT
