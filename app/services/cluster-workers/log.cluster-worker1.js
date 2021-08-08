const createLogCluster_function = require("../../functions/createLogCluster.functions");


process.on('message', data => {
    let res_json = createLogCluster_function.createLogCluster_controller(data);
    console.log(`log cluster-worker - 1 PID is ${process.pid}`);

    process.send(process.pid);

});