// import cluster from "cluster";
// import os from "os";
const cluster = require("cluster");
const os = require('os') //.cpus().length;

// export default (callback = null) => {
module.exports = (callback = null) => {


    const cpu_threads = os.cpus().length;


    logic_cluster_old = function () {

        for (let i = 0; i < cpu_threads; i++) {
            const worker = cluster.fork();

            // Listen for messages FROM the worker process.
            worker.on("message", (message) => {
                console.log(`[${worker.process.pid} to MASTER] \n \n`, message);
            });



        }

        cluster.on("exit", (worker) => {
            console.warn(`[${worker.process.pid}]`, {
                message: "Process terminated. Restarting.",
            });

            cluster.fork();
        });
    } // logic_cluster_old




    function between(min, max) {
        return Math.floor(
            Math.random() * (max - min + 1) + min
        )
    }

    logic_cluster_v2 = function () {


        console.log(`Master Process Id is - ${process.pid}`);

        const log_cluster_worker1 = require("child_process").fork("./app/services/cluster-workers/log.cluster-worker1");
        const log_cluster_worker2 = require("child_process").fork("./app/services/cluster-workers/log.cluster-worker2");
        const log_cluster_worker3 = require("child_process").fork("./app/services/cluster-workers/log.cluster-worker3");
        const log_cluster_worker4 = require("child_process").fork("./app/services/cluster-workers/log.cluster-worker4");


        console.log(`Child Process ID is ${log_cluster_worker1.pid}`);
        console.log(`Child Process ID is ${log_cluster_worker2.pid}`);
        console.log(`Child Process ID is ${log_cluster_worker3.pid}`);
        console.log(`Child Process ID is ${log_cluster_worker4.pid}`);


        log_cluster_worker1.on('message', function (message) {
            // Receive results from child process - 1
            console.log(`log cluster from Child Process - 1 is ${message}`);
        });
        log_cluster_worker2.on('message', function (message) {
            console.log(`log cluster from Child Process - 2 is ${message}`);
        });
        log_cluster_worker3.on('message', function (message) {
            console.log(`log cluster from Child Process - 3 is ${message}`);
        });
        log_cluster_worker4.on('message', function (message) {
            console.log(`log cluster from Child Process - 4 is ${message}`);
        });
        cluster.on("online", worker => {
            console.log(`Message received from - ${worker.process.pid}`)
            worker.on("message", message => {


                // console.log("===============message===================")
                // console.log(message)

                if (message && message.child_process == 1) {
                    log_cluster_worker1.send(message);
                } else if (message && message.child_process == 2) {
                    log_cluster_worker2.send(message);
                } else if (message && message.child_process == 3) {
                    log_cluster_worker3.send(message);
                } else if (message && message.child_process == 4) {
                    log_cluster_worker4.send(message);
                } else {
                    if (between(1, 4) == 1) {
                        log_cluster_worker1.send(message);
                    } else if (between(1, 4) == 2) {
                        log_cluster_worker2.send(message);
                    } else if (between(1, 4) == 3) {
                        log_cluster_worker3.send(message);
                    } else if (between(1, 4) == 4) {
                        log_cluster_worker4.send(message);
                    }
                }



                // if (message % 2 === 0) {
                //     log_cluster_worker1.send(message);
                // }else {
                //     const worker = cluster.fork();
                //     // Listen for messages FROM the worker process.
                //     worker.on("message", (message) => {
                //         console.log(`[${worker.process.pid} to MASTER] \n \n`, message);
                //     });
                // }


                // if (num % 2 === 0) {
                //     worker1.send(num);
                // }
                // else {
                //     worker2.send(num);
                // }
            });
        });
        for (let i = 0; i < cpu_threads - 2; i++) {
            let worker = cluster.fork();
            console.log(`Worker started on PID - ${worker.process.pid}`);
        }
        console.log(`Total Number of CPU Count is ${cpu_threads}`);

    }

    // console.log(`Total Number of CPU threads is ${cpu_threads}`);
    if (cluster.isMaster) { //cluster.isPrimary node 16 +
        // logic_cluster_v1()
        logic_cluster_v2()
    } else {
        // else ini berupa request / routes app express
        if (callback) callback();
    }
};