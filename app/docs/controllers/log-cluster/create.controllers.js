module.exports = {
    post:{
        tags:['log cluster request parameter'],
        description: "API ini digunakan untuk membuat generate file log menggunakan child process",
        operationId: "logClusterCreate",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/log_cluster'
                    }
                }
            }
        },
        responses:{
            '201':{
                description: "created successfully"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}