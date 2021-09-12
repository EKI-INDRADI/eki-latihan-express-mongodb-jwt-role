module.exports = {

    requestLimit: async function (req, res) {

        let res_json = {}
        try {
            res_json = {
                statusCode: 1,
                req_body : req.body,
                message: "rate limit success"
            }
        } catch (error) {
            res_json = {
                statusCode: 0,
                message: "controller createLog, error : " + error.message
            }
        }
        res.json(res_json)
    }

}
