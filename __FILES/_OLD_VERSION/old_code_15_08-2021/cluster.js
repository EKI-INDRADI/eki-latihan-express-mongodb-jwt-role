const cluster = require("cluster");
const os = require('os')
const cpu_threads = os.cpus().length;

// const cpu_threads_cluster_fork = Number(Math.floor(cpu_threads / 4)) // round down // Math.ceil() // round up
// const cpu_threads_child_process = Number(cpu_threads - cpu_threads_cluster_fork)

const cpu_threads_cluster_fork = Number(Math.floor(cpu_threads / 4)) // round down // Math.ceil() // round up
const cpu_threads_child_process = Number(cpu_threads - cpu_threads_cluster_fork)

const setup_console_log = require('./enableConsoleLog')
const swagger = require('./swagger')
const app = require('./app')

const cluster_child_process1 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process1");
const cluster_child_process2 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process2");
const cluster_child_process3 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process3");
const cluster_child_process4 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process4");
const cluster_child_process5 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process5");
const cluster_child_process6 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process6");
const cluster_child_process7 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process7");
const cluster_child_process8 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process8");
const cluster_child_process9 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process9");
const cluster_child_process10 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process10");
const cluster_child_process11 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process11");
const cluster_child_process12 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process12");
const cluster_child_process13 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process13");
const cluster_child_process14 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process14");
const cluster_child_process15 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process15");
const cluster_child_process16 = require("child_process").fork("./app/services/cluster-workers/cluster.child-process16");


//====== FIFO
let child_process_handle_fifo = [];
let temp_child_process_handle_fifo = 0
//====== / FIFO
module.exports = (callback = null) => {


    logic_cluster_v2 = function () {

        //====== FIFO
        for (let index_array = 1; index_array <= cpu_threads_child_process; index_array++) {
            child_process_handle_fifo.push(index_array);
        }
        //====== / FIFO


        console.log(`All multi thread PID : ${process.pid}`);

        if (cpu_threads_child_process >= 1) {
            console.log(`(cpu thread 1) (single thread -> synchronous) child process PID : ${cluster_child_process1.pid}`);
            cluster_child_process1.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 1) child process PID : ${cluster_child_process1.pid} \nmessage (cpu thread 1) : ${message}`);
                }
            });
        }


        if (cpu_threads_child_process >= 2) {
            console.log(`(cpu thread 2) (single thread -> synchronous) child process PID : ${cluster_child_process2.pid}`);
            cluster_child_process2.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 2) child process PID : ${cluster_child_process2.pid} \nmessage (cpu thread 2) : ${message}`);
                }
            });
        }

        if (cpu_threads_child_process >= 3) {
            console.log(`(cpu thread 3) (single thread -> synchronous) child process PID : ${cluster_child_process3.pid}`);
            cluster_child_process3.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 3) child process PID : ${cluster_child_process3.pid} \nmessage (cpu thread 3) : ${message}`);
                }
            });
        }

        if (cpu_threads_child_process >= 4) {
            console.log(`(cpu thread 4) (single thread -> synchronous) child process PID : ${cluster_child_process4.pid}`);
            cluster_child_process4.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 4) child process PID : ${cluster_child_process4.pid} \nmessage (cpu thread 4) : ${message}`);
                }
            });
        }

        if (cpu_threads_child_process >= 5) {
            console.log(`(cpu thread 5) (single thread -> synchronous) child process PID : ${cluster_child_process5.pid}`);
            cluster_child_process5.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 5) child process PID : ${cluster_child_process5.pid} \nmessage (cpu thread 5) : ${message}`);
                }
            });
        }


        if (cpu_threads_child_process >= 6) {
            console.log(`(cpu thread 6) (single thread -> synchronous) child process PID : ${cluster_child_process6.pid}`);
            cluster_child_process6.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 6) child process PID : ${cluster_child_process6.pid} \nmessage (cpu thread 6) : ${message}`);
                }
            });
        }

        if (cpu_threads_child_process >= 7) {
            console.log(`(cpu thread 7) (single thread -> synchronous) child process PID : ${cluster_child_process7.pid}`);
            cluster_child_process7.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 7) child process PID : ${cluster_child_process7.pid} \nmessage (cpu thread 7) : ${message}`);
                }
            });
        }


        if (cpu_threads_child_process >= 8) {
            console.log(`(cpu thread 8) (single thread -> synchronous) child process PID : ${cluster_child_process8.pid}`);
            cluster_child_process8.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 8) child process PID : ${cluster_child_process8.pid} \nmessage (cpu thread 8) : ${message}`);
                }
            });
        }

        if (cpu_threads_child_process >= 9) {
            console.log(`(cpu thread 9) (single thread -> synchronous) child process PID : ${cluster_child_process9.pid}`);
            cluster_child_process9.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 9) child process PID : ${cluster_child_process9.pid} \nmessage (cpu thread 9) : ${message}`);
                }
            });
        }

        if (cpu_threads_child_process >= 10) {
            console.log(`(cpu thread 10) (single thread -> synchronous) child process PID : ${cluster_child_process10.pid}`);
            cluster_child_process10.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 10) child process PID : ${cluster_child_process10.pid} \nmessage (cpu thread 10) : ${message}`);
                }
            });
        }


        if (cpu_threads_child_process >= 11) {
            console.log(`(cpu thread 11) (single thread -> synchronous) child process PID : ${cluster_child_process11.pid}`);
            cluster_child_process11.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 11) child process PID : ${cluster_child_process11.pid} \nmessage (cpu thread 11) : ${message}`);
                }
            });
        }

        if (cpu_threads_child_process >= 12) {
            console.log(`(cpu thread 12) (single thread -> synchronous) child process PID : ${cluster_child_process12.pid}`);
            cluster_child_process12.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 12) child process PID : ${cluster_child_process12.pid} \nmessage (cpu thread 12) : ${message}`);
                }
            });
        }

        if (cpu_threads_child_process >= 13) {
            console.log(`(cpu thread 13) (single thread -> synchronous) child process PID : ${cluster_child_process13.pid}`);
            cluster_child_process13.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 13) child process PID : ${cluster_child_process13.pid} \nmessage (cpu thread 13) : ${message}`);
                }
            });
        }

        if (cpu_threads_child_process >= 14) {
            console.log(`(cpu thread 14) (single thread -> synchronous) child process PID : ${cluster_child_process14.pid}`);
            cluster_child_process14.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 14) child process PID : ${cluster_child_process14.pid} \nmessage (cpu thread 14) : ${message}`);
                }
            });
        }

        if (cpu_threads_child_process >= 15) {
            console.log(`(cpu thread 15) (single thread -> synchronous) child process PID : ${cluster_child_process15.pid}`);
            cluster_child_process15.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 15) child process PID : ${cluster_child_process15.pid} \nmessage (cpu thread 15) : ${message}`);
                }
            });
        }


        if (cpu_threads_child_process >= 16) {
            console.log(`(cpu thread 16) (single thread -> synchronous) child process PID : ${cluster_child_process16.pid}`);
            cluster_child_process16.on('message', function (message) {
                if (setup_console_log.enable == true) {
                    console.log(`Message received from (cpu thread 16) child process PID : ${cluster_child_process16.pid} \nmessage (cpu thread 16) : ${message}`);
                }
            });
        }

        let cluster_enable_cpu = 0;
        let next_cluster_cpu = 0
        cluster.on("online", worker => {
            cluster_enable_cpu = cluster_enable_cpu + 1
            next_cluster_cpu = cpu_threads_child_process + cluster_enable_cpu


            if (setup_console_log.enable == true) {
                console.log(`Message received from (handle cpu thread ${next_cluster_cpu}) worker cluster.fork PID : ${worker.process.pid}`)
            }


            worker.on("message", message => {

                // ============================ cluster_child_process

                // FIFO HANDLE
                if (cpu_threads_child_process >= 1 && child_process_handle_fifo[0] == 1) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process1.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                } else if (cpu_threads_child_process >= 2 && child_process_handle_fifo[0] == 2) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process2.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                } else if (cpu_threads_child_process >= 3 && child_process_handle_fifo[0] == 3) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process3.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }
                else if (cpu_threads_child_process >= 4 && child_process_handle_fifo[0] == 4) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process4.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }
                else if (cpu_threads_child_process >= 5 && child_process_handle_fifo[0] == 5) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process5.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }
                else if (cpu_threads_child_process >= 6 && child_process_handle_fifo[0] == 6) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process6.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }
                else if (cpu_threads_child_process >= 7 && child_process_handle_fifo[0] == 7) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process7.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }
                else if (cpu_threads_child_process >= 8 && child_process_handle_fifo[0] == 8) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process8.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }

                else if (cpu_threads_child_process >= 9 && child_process_handle_fifo[0] == 9) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process9.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }

                else if (cpu_threads_child_process >= 10 && child_process_handle_fifo[0] == 10) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process10.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }

                else if (cpu_threads_child_process >= 11 && child_process_handle_fifo[0] == 11) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process11.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }

                else if (cpu_threads_child_process >= 12 && child_process_handle_fifo[0] == 12) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process12.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }

                else if (cpu_threads_child_process >= 13 && child_process_handle_fifo[0] == 13) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process13.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }

                else if (cpu_threads_child_process >= 14 && child_process_handle_fifo[0] == 14) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process14.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }

                else if (cpu_threads_child_process >= 15 && child_process_handle_fifo[0] == 15) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process15.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }

                else if (cpu_threads_child_process >= 16 && child_process_handle_fifo[0] == 16) {
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process16.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }

                else {
                    console.log("error logic fifo gak bener nih")
                    if (message && message.from == 'log-cluster') {
                        delete message.from
                        cluster_child_process1.send(message);
                    }
                    temp_child_process_handle_fifo = child_process_handle_fifo[0]
                    child_process_handle_fifo.shift();
                    child_process_handle_fifo.push(temp_child_process_handle_fifo)
                }
                // ============================ / cluster_child_process







            });
        });




        for (let i = 1; i <= cpu_threads_cluster_fork; i++) {
            let worker = cluster.fork();
            console.log(`(cpu thread ${i + cpu_threads_child_process}) (multi thread -> asynchronous) worker cluster.fork PID : ${worker.process.pid}`);
        }

        console.log(`[total cpu thread : ${cpu_threads}] [total child process : ${cpu_threads_child_process}] [total worker cluster fork : ${cpu_threads_cluster_fork}] started`);
        console.log(`PORT : [APP : ${app.PORT_APP}] [SWAGGER : ${swagger.PORT_SWAGGER}]`)
    }

    if (cluster.isMaster) {
        // logic_cluster_v1()
        logic_cluster_v2()
    } else {
        // else ini berupa request / routes app express
        if (callback) callback();
    }
};