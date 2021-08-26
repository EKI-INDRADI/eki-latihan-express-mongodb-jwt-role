const setup_console_log = require('../../middlewares/enableConsoleLog')
const cluster_config = require("../cluster-config/config")


process.on('message', data => {

    if (data) {
        data.cpu_thread_handle = 1
    }

    cluster_config.condition(data, (result) => {
        if (setup_console_log.enable == true) {
            console.log(`(cpu thread ${data.cpu_thread_handle}) send message child process PID : ${process.pid}`);
        }
        process.send(result);
    })


    // let res_json = createLogCluster_function.createLogCluster_controller(data);
    // if (setup_console_log.enable == true) {
    // console.log(`(cpu thread 10) send message child process PID : ${process.pid}`);
    // }
    // process.send(res_json);


});