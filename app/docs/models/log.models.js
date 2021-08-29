
module.exports = {
    log: {
        type: 'object',
        properties: {
            data: {
                type: 'object',
                description: "desc data",
                example: { array: [1, 2, 3, 4, 5] }
            },
            func_name: {
                type: "string",
                description: "desc func_name",
                example: "swagger",
            },
            note: {
                type: "string",
                description: "desc note",
                example: "request",
            },
            new_dir: {
                type: "string",
                description: "desc new_dir",
                example: "swagger_log/",
            },
        }
    }
}