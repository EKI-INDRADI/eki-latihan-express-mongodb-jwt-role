let amqplib = require("amqplib/callback_api");
const rabbitmq_server = require('../../../config/rabbitmq.config')

let res_json = {}

function event_driven_producer(request) {
    amqplib.connect(rabbitmq_server.rabbitmq_url, (err, connection) => {
        if (err) process.exit();
        let set_consumer_name = "event_driven_consumer";
        connection.createChannel((error, channel) => {
            if (error) {
                console.log(error);

                res_json = {
                    statusCode: 0,
                    request: request,
                    message: error
                }

                process.exit();

            }
            else {
          
                channel.assertQueue(set_consumer_name, { durable: false });
                channel.sendToQueue(set_consumer_name, Buffer.from(JSON.stringify(request)))
                console.log(`send to consumer - ${set_consumer_name}`);
                res_json = {
                    statusCode: 1,
                    request: request,
                    message: `send to consumer - ${set_consumer_name}`
                }

               
            }
        });
    });


    return res_json
}

module.exports = event_driven_producer;