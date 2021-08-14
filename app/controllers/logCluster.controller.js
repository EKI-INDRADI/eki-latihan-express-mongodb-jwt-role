
const createLog_function = require('../functions/createLog.functions');
const setup_console_log = require('./../middlewares/enableConsoleLog')

module.exports = {

    createLog: async function (req, res) {

        
        // ======================== KIRIM PROCESS KE CLUSTER MASTER -> CHILD PROCESS

        let example_req_body =  {
            "child_process" : 1,  // 1,2,3,4   <<<< set untuk worker child process
            "data": {"array" : [ 1,2,3,4,5]},
            "func_name": "test",
            "note": "error",
            "new_dir": "error_log/",
            // "from" : "log-cluster"
        }

        req.body.from = "log-cluster"
        process.send(req.body);
        if (setup_console_log.enable == true) {
        console.log(`Message Process PID : ${process.pid} received the request!`);
        }
        ///  ======================== KIRIM PROCESS KE CLUSTER MASTER -> CHILD PROCESS

       res.json({result : `Message Process PID : ${process.pid} received the request!`})

    },






}
