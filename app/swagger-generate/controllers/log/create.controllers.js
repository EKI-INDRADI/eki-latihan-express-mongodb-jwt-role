module.exports = {
    post:{
        tags:['log request parameter'],
        description: "API ini digunakan untuk membuat generate file log (tanpa menggunakan child process)",
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