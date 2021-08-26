module.exports = {
    post:{
        tags:['log-cluster operation'],
        description: "Create log cluster",
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