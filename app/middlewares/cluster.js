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

        let child_process_handle_fifo = [];

        let temp_child_process_handle_fifo
        for (let index_array = 1; index_array < (4 + 1); index_array++) {
            child_process_handle_fifo.push(index_array);
        }


        temp_child_process_handle_fifo = child_process_handle_fifo[0]
        child_process_handle_fifo.shift();
        child_process_handle_fifo.push(temp_child_process_handle_fifo)


        // temp_child_process_handle_fifo = child_process_handle_fifo[0]
        // child_process_handle_fifo.shift();
        // child_process_handle_fifo.push(temp_child_process_handle_fifo)


        // temp_child_process_handle_fifo = child_process_handle_fifo[0]
        // child_process_handle_fifo.shift();
        // child_process_handle_fifo.push(temp_child_process_handle_fifo)

        // console.log(child_process_handle_fifo)






        console.log(`All multi thread PID : ${process.pid}`);

        const log_cluster_child_process1 = require("child_process").fork("./app/services/cluster-workers/log-cluster.child-process1");
        const log_cluster_child_process2 = require("child_process").fork("./app/services/cluster-workers/log-cluster.child-process2");
        const log_cluster_child_process3 = require("child_process").fork("./app/services/cluster-workers/log-cluster.child-process3");
        const log_cluster_child_process4 = require("child_process").fork("./app/services/cluster-workers/log-cluster.child-process4");


        console.log(`(cpu thread 1) (single thread -> like synchronous) child process PID : ${log_cluster_child_process1.pid}`);
        console.log(`(cpu thread 2) (single thread -> like synchronous) child process PID : ${log_cluster_child_process2.pid}`);
        console.log(`(cpu thread 3) (single thread -> like synchronous) child process PID : ${log_cluster_child_process3.pid}`);
        console.log(`(cpu thread 4) (single thread -> like synchronous) child process PID : ${log_cluster_child_process4.pid}`);


        log_cluster_child_process1.on('message', function (message) {
            // let data_message
            // if (message.constructor == Array || message.constructor == Object) {
            //     data_message = JSON.stringify(message).toString();
            // } else {
            //     data_message = message
            // }
            console.log(`Message received from (cpu thread 1) child process PID : ${log_cluster_child_process1.pid} \n ${JSON.stringify(message)}`);
        });
        log_cluster_child_process2.on('message', function (message) {

            console.log(`Message received from (cpu thread 2) child process PID : ${log_cluster_child_process2.pid} \n ${JSON.stringify(message)}`);
        });
        log_cluster_child_process3.on('message', function (message) {

            console.log(`Message received from (cpu thread 3) child process PID : ${log_cluster_child_process3.pid} \n ${JSON.stringify(message)}`);
        });
        log_cluster_child_process4.on('message', function (message) {

            console.log(`Message received from (cpu thread 4) child process PID : ${log_cluster_child_process4.pid} \n ${JSON.stringify(message)}`);
        });



        let cluster_enable_cpu = 0;
        let next_cluster_cpu = 0
        cluster.on("online", worker => {
            cluster_enable_cpu = cluster_enable_cpu + 1
            next_cluster_cpu = 5 + cluster_enable_cpu

            if (next_cluster_cpu == cpu_threads + 1) {
                console.log(`Message received from (handle cpu thread backup worker cluster.fork PID : ${worker.process.pid}`)
            } else {
                console.log(`Message received from (handle cpu thread ${next_cluster_cpu}) worker cluster.fork PID : ${worker.process.pid}`)
            }

            worker.on("message", message => {


                // console.log("===============message===================")
                // console.log(message)

                if (message && message.child_process == 1) {
                    log_cluster_child_process1.send(message);
                } else if (message && message.child_process == 2) {
                    log_cluster_child_process2.send(message);
                } else if (message && message.child_process == 3) {
                    log_cluster_child_process3.send(message);
                } else if (message && message.child_process == 4) {
                    log_cluster_child_process4.send(message);
                } else {



                    // FIFO HANDLE
                    if (child_process_handle_fifo[0] == 1) {
                        log_cluster_child_process1.send(message);
                        temp_child_process_handle_fifo = child_process_handle_fifo[0]
                        child_process_handle_fifo.shift();
                        child_process_handle_fifo.push(temp_child_process_handle_fifo)
                    }

                    if (child_process_handle_fifo[0] == 2) {
                        log_cluster_child_process2.send(message);
                        temp_child_process_handle_fifo = child_process_handle_fifo[0]
                        child_process_handle_fifo.shift();
                        child_process_handle_fifo.push(temp_child_process_handle_fifo)
                    }

                    if (child_process_handle_fifo[0] == 3) {
                        log_cluster_child_process3.send(message);
                        temp_child_process_handle_fifo = child_process_handle_fifo[0]
                        child_process_handle_fifo.shift();
                        child_process_handle_fifo.push(temp_child_process_handle_fifo)
                    }


                    if (child_process_handle_fifo[0] == 4) {
                        log_cluster_child_process4.send(message);
                        temp_child_process_handle_fifo = child_process_handle_fifo[0]
                        child_process_handle_fifo.shift();
                        child_process_handle_fifo.push(temp_child_process_handle_fifo)
                    }


                    // if (between(1, 4) == 1) {
                    //     log_cluster_child_process1.send(message);
                    // } else if (between(1, 4) == 2) {
                    //     log_cluster_child_process2.send(message);
                    // } else if (between(1, 4) == 3) {
                    //     log_cluster_child_process3.send(message);
                    // } else if (between(1, 4) == 4) {
                    //     log_cluster_child_process4.send(message);
                    // }

                    // if (process.pid % 2 === 0) {
                    //     if (between(1, 2)) {
                    //         log_cluster_child_process1.send(message);
                    //     } else {
                    //         log_cluster_child_process2.send(message);
                    //     }
                    // } else {
                    //     if (between(3, 4)) {
                    //         log_cluster_child_process3.send(message);
                    //     } else {
                    //         log_cluster_child_process4.send(message);
                    //     }
                    // }


                    // if (message % 2 === 0) {
                    //     log_cluster_child_process1.send(message);
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


                    // // https://stackoverflow.com/questions/34881343/node-js-detect-a-child-process-exit
                    // // https://stackoverflow.com/questions/21255202/checking-if-a-child-process-is-running
                    // // https://nodejs.org/api/child_process.html#child_process_event_exit


                } // else 




                // log_cluster_child_process1.on('close', function (message) {
                //     console.log(`close child process (log_cluster_child_process) - 1 is ${message}`);
                // });

                // log_cluster_child_process2.on('close', function (message) {
                //     console.log(`close child process (log_cluster_child_process) - 2 is ${message}`);
                // });

                // log_cluster_child_process3.on('close', function (message) {
                //     console.log(`close child process (log_cluster_child_process) - 3 is ${message}`);
                // });

                // log_cluster_child_process4.on('close', function (message) {
                //     console.log(`close child process (log_cluster_child_process) - 4 is ${message}`);
                // });



                // log_cluster_child_process1.on('exit', function (message) {
                //     console.log(`exit child process (log_cluster_child_process) - 1 is ${message}`);
                // });

                // log_cluster_child_process2.on('exit', function (message) {
                //     console.log(`exit child process (log_cluster_child_process) - 1 is ${message}`);
                // });

                // log_cluster_child_process3.on('exit', function (message) {
                //     console.log(`exit child process (log_cluster_child_process) - 1 is ${message}`);
                // });

                // log_cluster_child_process4.on('exit', function (message) {
                //     console.log(`exit child process (log_cluster_child_process) - 1 is ${message}`);
                // });


            });
        });


        //   for (let i = 0; i < cpu_threads - 2; i++) {



        if (cpu_threads > 4) {
            for (let i = 0; i < cpu_threads - 4; i++) {
                let worker = cluster.fork();
                console.log(`(cpu thread ${i + 5}) (multi thread -> asynchronous) worker cluster.fork PID : ${worker.process.pid}`);
            }
        }

        console.log(`(total cpu thread : ${cpu_threads} ) child process + worker cluster fork started`);

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