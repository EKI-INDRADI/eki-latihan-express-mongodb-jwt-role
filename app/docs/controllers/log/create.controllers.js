module.exports = {
    post:{
        tags:['log operation'],
        description: "Create log",
        operationId: "logCreate",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/log'
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