
const fs = require('fs');


const base_dir = require('./../../base_dir')

__basedir = base_dir.set_cluster_base_dir()

exports.createLogCluster_function = async function (data, func_name = "_", note = "_", new_dir) {


  
    //===================
    // const axios = require('axios').default;
    // try {
    //   let params_log = {
    //     data: data,
    //     func_name: "postingSubconProjectProgress",
    //     note: "updateProject",
    //     new_dir : "stock_mutation/"
    //   };

    //   const params_result = await axios({
    //     method: 'get',
    //     url: 'http://localhost:3600/log/create-log-file',
    //     data: params_log
    //   });
    // } catch (error) {
    //   console.log("EKI CONSOLE ===== ERROR CREATE LOG ===================================================================")
    // }
    //===================

    if (!fs.existsSync(__basedir + "/log-files/" + new_dir)) {
        fs.mkdirSync(__basedir + "/log-files/" + new_dir);
    }

    if (data.constructor == Array || data.constructor == Object || data.constructor == String) {

        let text_write = data;


        let directoryPath

        if (new_dir) {
            directoryPath = __basedir + "/log-files/" + new_dir
        } else {
            directoryPath = __basedir + "/log-files/";
        }


        let auto_generate = ("0" + new Date().getDate()).slice(-2) + "-"
            + ("0" + (new Date().getMonth() + 1)).slice(-2) + "-"
            + new Date().getFullYear() + "-"
            + ("0" + new Date().getHours()).slice(-2)
            + ("0" + new Date().getMinutes()).slice(-2)
            + ("0" + new Date().getMilliseconds());


        let text_write_by_file_type;

        let file_type = ".txt";

        try {


            if (text_write == undefined) {
                text_write_by_file_type = String("undefined");
                file_type = ".txt";
            } else if (text_write.constructor == Number) {
                ext_write_by_file_type = String(text_write);
                file_type = ".txt";

            } else if (text_write.constructor == Array || text_write.constructor == Object) {
                text_write_by_file_type = JSON.stringify(text_write).toString();
                file_type = ".json";
            } else if (text_write.constructor == String) {
                text_write_by_file_type = String(text_write);
                file_type = ".txt";
            }

            // fs.writeFile(directoryPath + "log_" + func_name + "_" + note + "_" + auto_generate + file_type, text_write_by_file_type)
            let console_log
            if (new_dir) {
                console_log = "func createLog, file : " + __basedir + " -> log-files -> " + new_dir + " -> " + auto_generate + "_log_" + func_name + "_" + note + file_type + " saved!"
            } else {
                console_log = "func createLog, file : " + __basedir + " -> log-files -> " + auto_generate + "_log_" + func_name + "_" + note + file_type + " saved!"
            }


            // fs.writeFile 
            // fs.writeFileSync  
            fs.writeFileSync(directoryPath + auto_generate + "_log_" + func_name + "_" + note + file_type, text_write_by_file_type, function (err, result) {

                if (err) console.log(console_log);
            });


            let res_json = {
                statusCode: 1,
                message: "func createLog, file : " + __basedir + " -> log-files -> " + auto_generate + "_log_" + func_name + "_" + note + file_type + " saved!"
            }

            if (new_dir) {
                res_json = {
                    statusCode: 1,
                    message: "func createLog, file : " + __basedir + " -> log-files -> " + new_dir + " -> " + auto_generate + "_log_" + func_name + "_" + note + file_type + " saved!"
                }
            }


            return res_json

        } catch (error) {
            console.log(" catch (error) , func createLog, location : helper -> create-log.js , error : " + error.message);

            let res_json = {
                statusCode: 0,
                message: " catch (error) , func createLog, location : helper -> create-log.js , error : " + error.message
            }
            return res_json
        }

    } else {
        console.log("func createLog, data != string/array/object ");
    }

};


exports.createLogCluster_controller = async function (request) {

    let params_create_log = {}

    if (request.data) {
        params_create_log.data = request.data
    }

    if (request.func_name) {
        params_create_log.func_name = request.func_name
    }

    if (request.note) {
        params_create_log.note = request.note
    }

    if (request.new_dir) {
        params_create_log.new_dir = request.new_dir
    }

    let result_create_log
    let res_json = {
        statusCode: 0,
        message: "Error"
    }
    try {

        result_create_log = await exports.createLogCluster_function(request.data, request.func_name, request.note, request.new_dir)

        res_json = {
            statusCode: 1,
            message: result_create_log.message
        }
    } catch (error) {
        res_json = {
            statusCode: 0,
            message: "controller createLog, error : " + error.message
        }
    }


    console.log(res_json)
    return res_json

}
