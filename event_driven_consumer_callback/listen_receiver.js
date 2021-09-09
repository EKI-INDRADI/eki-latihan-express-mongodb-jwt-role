const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
let amqplib = require("amqplib/callback_api");
const rabbitmq_server = require('./config/rabbitmq.config')


var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





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


app.get("/", (req, res) => {
    res.json({ message: "RABITMQ RECEIVER" });
});


const PORT = process.env.PORT_APP || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
