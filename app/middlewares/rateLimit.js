// =============================== LIMIT REQUEST
const rateLimit = require("express-rate-limit");
// =============================== LIMIT REQUEST



// =========================RATE LIMIT
exports.enable_rate_limit_1sec_per_second = rateLimit({
    // windowMs: 60 * 60 * 1000, // 1 hour window
    // max: 5, // start blocking after 5 requests
    // message:
    //   "Too many accounts created from this IP, please try again after an hour"

    windowMs: 1000, // 1 second
    max: 1, // start blocking after 1 requests
    message:
        { status: 0, request_limit: "block", message: "Too many request from this IP, please try again after an second" }
});

// ========================= / RATE LIMIT


// 16-june-2021 ============ enable rate limit



// ---------- global rate limit
// app.use(enable_rate_limit_1sec_per_second);
// ---------- / global rate limit

// ----------  spesific rate limit
// app.get("/rate-limit",enable_rate_limit_1sec_per_second,  (req, res) => {
//   res.json({ message: "Rate limit  1 sec OK" });
// });
// ---------- / spesific rate limit
// 16-june-2021 ============ enable rate limit

