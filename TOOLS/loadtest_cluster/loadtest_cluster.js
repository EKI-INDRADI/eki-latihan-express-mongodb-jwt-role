
var loadtest = require('loadtest');

// const testserver = require('testserver');

// function statusCallback(error, result, latency) {
//     console.log('Current latency %j, result %j, error %j', latency, result, error);
//     console.log('----');
//     console.log('Request elapsed milliseconds: ', result.requestElapsed);
//     console.log('Request index: ', result.requestIndex);
//     console.log('Request loadtest() instance index: ', result.instanceIndex);
// }


// function contentInspector(result) {
//     if (result.statusCode == 200) {
//         const body = JSON.parse(result.body)
//         // how to examine the body depends on the content that the service returns
//         if (body.status.err_code !== 0) {
//             result.customError = body.status.err_code + " " + body.status.msg
//             result.customErrorCode = body.status.err_code
//         }
//     }
// }


// var data = {
//     "data": { "array": [1, 2, 3, 4, 5] },
//     "func_name": "load_test",
//     "note": "error",
//     "new_dir": "error_log/"
// }
// var options = {
//     url: 'http://localhost:8080/api/log-cluster/create',
//     body: data,
//     maxRequests: 10,
//     statusCallback: statusCallback
// };

// loadtest.loadTest(options, function (error, result) {


//     if (error) {
//         return console.error('Got an error: %s', error);
//     }
//     contentInspector(result)
//     console.log('Tests run successfully');
// });

// // const server = testserver.startServer({ port: 8000 });


function statusCallback(error, result, latency) {
    console.log('Current latency %j, result %j, error %j', latency, result, error);
    console.log('----');
    console.log('Request elapsed milliseconds: ', result.requestElapsed);
    console.log('Request index: ', result.requestIndex);
    console.log('Request loadtest() instance index: ', result.instanceIndex);
}

var data = {
    "data": { "array": [1, 2, 3, 4, 5] },
    "func_name": "load_test",
    "note": "error",
    "new_dir": "error_log/"
}


const options = {
    url: 'http://localhost:8080',
    // concurrency: 5,
    method: 'POST',
    // body: "",
    requestsPerSecond: 4,
    maxSeconds: 5,
    statusCallback: statusCallback,
    requestGenerator: (params, options, client, callback) => {
        // const message = '{"data": {"array" : [ 1,2,3,4,5]}, "func_name": "test","note": "error","new_dir": "error_log/"}';

        let message = JSON.stringify(data)
        options.headers['Content-Length'] = message.length;
        options.headers['Content-Type'] = 'application/json';
        // options.body = '';
        options.path = '/api/log-cluster/create'
        const request = client(options, callback);
       request.write(message);
        return request;
    }
};

loadtest.loadTest(options, (error, results) => {
    if (error) {
        return console.error('Got an error: %s', error);
    }
    console.log(results);
    console.log('Tests run successfully');
});