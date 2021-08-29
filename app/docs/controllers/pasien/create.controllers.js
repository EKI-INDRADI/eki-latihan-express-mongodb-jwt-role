module.exports = {
    post: {
        security: [
            {
                token: []
            }
        ],
        tags: ['pasien parameter'],
        description: "api ini digunakan menambahkan data pasien",
        operationId: "pasienCreate",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/pasien'
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
            '403': {
                description: "Forbidden request, access required"
            },
            '404': {
                description: "Request not found"
            },
            '500': {
                description: "Server error"
            }
        }
    }
}