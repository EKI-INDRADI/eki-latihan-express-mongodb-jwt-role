let amqplib = require("amqplib/callback_api");
const rabbitmq_server = require('../../../config/rabbitmq.config')

amqplib.connect(rabbitmq_server.rabbitmq_url, (err, connection) => {
    if (err) { process.exit(); }
    else {
        let consumer_name = "event_driven_consumer";
        connection.createChannel((err, channel) => {
            channel.assertQueue(consumer_name, { durable: false });
            channel.consume(consumer_name, message => {
                console.log(`Waiting for messages`);
                console.log(`${consumer_name} - ${message.content.toString()}`);
            }, { noAck: true });
        });
    }
});