module.exports = {
    post: {
        tags: ['jwt-signup parameter'],
        description: "api ini digunakan untuk registration user login",
        operationId: "jwtSignup",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/jwt_signup'
                    }
                }
            }
        },
        responses: {
            '201': {
                description: "created successfully"
            },
            '500': {
                description: 'Server error'
            }
        }
    }
}