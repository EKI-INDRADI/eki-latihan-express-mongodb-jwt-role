
module.exports = {
    jwt_token: {
        type: 'object',
        properties: {
            username: {
                type: 'string',
                description: "nothing",
                example: "admin2"
            },
            password: {
                type: "string",
                description: "nothing",
                example: "masuk123"
            },
        }
    }
}