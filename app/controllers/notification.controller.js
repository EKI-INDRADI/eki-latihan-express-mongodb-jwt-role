
const sender_services = require('../services/event-driven/producer_sender/sender');

module.exports = {

    send_notification: function (req, res) {

        try {


            result = sender_services(req.body)

            res.json(result)
        } catch (error) {
            return {
                statusCode: 0,
                message: "controller noitication, error : " + error.message
            }
        }


    },







    // const get_payment_channels = await axios({
    //     method: 'get',
    //     url: 'https://api.xendit.co/payment_channels',
    //     headers: {
    //         'Authorization': `Basic ${secretkey_base64}`
    //     }
    // })


    // console.log(get_payment_channels['data'])
    // res.json(get_payment_channels['data'])

}
