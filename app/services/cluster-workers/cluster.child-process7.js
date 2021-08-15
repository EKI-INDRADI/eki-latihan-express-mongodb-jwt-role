const setup_console_log = require('../../middlewares/enableConsoleLog')
const cluster_config = require("../cluster-config/config")

process.on('message', data => {
    if (data) {
        data.cpu_thread_handle = 7
    }
    
    cluster_config.condition(data, (result) => {
        if (setup_console_log.enable == true) {
            console.log(`(cpu thread ${data.cpu_thread_handle}) send message child process PID : ${process.pid}`);
        }
        process.send(result);
    })
});