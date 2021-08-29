
module.exports = {
    jwt_signup: {
        type: 'object',
        properties: {
            username: {
                type: 'string',
                description: "username = [admin role] : 'admin2', [moderator role] : 'moderator', [user role] : 'ekiindradi3' ",
                example: "admin2"
            },
            email: {
                type: "string",
                description: "email = [admin role] : 'admin2@gmail.com', [moderator role] : 'moderator@gmail.com', [user role] : 'user@gmail.com' ",
                example: "admin2@gmail.com",
            },
            password: {
                type: "string",
                description: "password = '*******",
                example: "masuk123",
            },
            roles: {
                type: "array",
                description:  "roles = "+ 
                "[admin role] : ['user', 'moderator' , 'admin'], "+
                "[moderator role] : ['user', 'moderator'], "+
                "[user role] :  ['user']",
                
                example: ["user", "moderator" , "admin"],
            },
        }
    }
}