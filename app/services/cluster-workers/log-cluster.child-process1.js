const createLogCluster_function = require("../../functions/createLogCluster.functions");


process.on('message', data => {
    let res_json = createLogCluster_function.createLogCluster_controller(data);
    console.log(`(cpu thread 1) send message child process PID : ${process.pid}`);
    process.send(res_json);

});