const createLogCluster_function = require("../../functions/createLogCluster.functions");
const setup_console_log = require('../../middlewares/enableConsoleLog')

process.on('message', data => {
    if (data) {
        data.cpu_thread_handle = 8
    }
    let res_json = createLogCluster_function.createLogCluster_controller(data);
    if (setup_console_log.enable == true) {
    console.log(`(cpu thread 8) send message child process PID : ${process.pid}`);
    }
    process.send(res_json);
});