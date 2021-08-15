const createLogCluster_function = require("../../functions/createLogCluster.functions")


let res_json = {}

// exports.condition = async function (data) {

//     if (data.from == "log-cluster") {
//         res_json = await createLogCluster_function.createLogCluster_controller(data);
//     }

//     return res_json

// }

exports.condition = (data, callback_return) => {

    if (data.from == "log-cluster") {
        res_json = createLogCluster_function.createLogCluster_controller(data);
    }

    callback_return(res_json)
}