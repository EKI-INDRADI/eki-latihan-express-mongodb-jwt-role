
const createLog_function = require('../functions/createLog.functions');


module.exports = {

    createLog: async function (req, res) {

        
        // ======================== KIRIM PROCESS KE CLUSTER MASTER -> CHILD PROCESS

        let example_req_body =  {
            "child_process" : 1,  // 1,2,3,4   <<<< set untuk worker child process
            "data": {"array" : [ 1,2,3,4,5]},
            "func_name": "test",
            "note": "error",
            "new_dir": "error_log/"
        }
        process.send(req.body);
        console.log(`Process Id ${process.pid} received the request!`);
        ///  ======================== KIRIM PROCESS KE CLUSTER MASTER -> CHILD PROCESS

       res.json({result : `Process Id ${process.pid} received the request!`})

    },






}
