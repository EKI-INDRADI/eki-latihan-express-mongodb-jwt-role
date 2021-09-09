require('dotenv').config()

let enable = process.env.ENABLE_CONSOLE_LOG || false

module.exports = {
    enable
}