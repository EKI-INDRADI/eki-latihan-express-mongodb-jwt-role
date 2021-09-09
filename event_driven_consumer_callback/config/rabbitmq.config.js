require('dotenv').config()

let rabbitmq_url = process.env.RABBITMQ_SERVER || "amqp://localhost"

module.exports = {
    rabbitmq_url
}