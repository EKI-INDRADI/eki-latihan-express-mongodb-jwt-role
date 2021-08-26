
module.exports = {
    log_cluster: {
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
                example: "request_cluster",
            },
            new_dir: {
                type: "new_dir",
                description: "desc new_dir",
                example: "swagger_log/",
            },
        }
    }
}