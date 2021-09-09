module.exports = {
    post: {
        tags: ['jwt-token parameter'],
        description: "api ini digunakan untuk get token",
        operationId: "jwtToken",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/jwt_token'
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Successful request",
                content: {
                    'application/json': {
                    }
                }
            },
            '400': {
                description: "Invalid request"
            },
            '404': {
                description: "Request not found"
            },
            '500': {
                description: 'Server error'
            }
        }
    }
}