module.exports = {
    post: {
        tags: ['jwt-signin parameter'],
        description: "api ini digunakan untuk user login",
        operationId: "jwtSignin",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/jwt_signin'
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Successful request",
                content: {
                    'application/json': {
                        // schema: {
                        //     $ref: '#/components/schemas/jwt_signin_token'
                        // }

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