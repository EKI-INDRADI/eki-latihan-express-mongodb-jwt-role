// var axios = require('axios').default
// var moment = require('moment')
// const dotenv = require('dotenv');
// dotenv.config();

const createLog_function = require('../functions/createLog.functions');


module.exports = {

    createLog: async function (req, res) {

 

        let params_create_log = {}

        if (req.body.data) {
            params_create_log.data = req.body.data
        }

        if (req.body.func_name) {
            params_create_log.func_name = req.body.func_name
        }

        if (req.body.note) {
            params_create_log.note = req.body.note
        }

        if (req.body.new_dir) {
            params_create_log.new_dir = req.body.new_dir
        }


     
        let result_create_log
        try {

            result_create_log = await createLog_function.createLog(req.body.data, req.body.func_name, req.body.note, req.body.new_dir)

            res.json({
                statusCode: 1,
                message: result_create_log.message
            })
        } catch (error) {
            return {
                statusCode: 0,
                message: "controller createLog, error : " + error.message
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
