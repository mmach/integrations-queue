
var amqp = require('amqplib/callback_api');

amqp.connect(process.env.AMQP?process.env.AMQP:'amqp://kyqjanjv:6djuPiJWnpZnIMT1jZ-SvIULv8IOLw2P@hedgehog.rmq.cloudamqp.com/kyqjanjv', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'integration-items';


        channel.prefetch(1);

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
        channel.consume(queue, function (msg) {
            // throw msg;
            console.log(msg.content.toString());
            channel.ack(msg);

            //  
          

            // console.log(" [x] Received %s", msg.content.toString());

        }, {
            noAck: false
        });
    });
});