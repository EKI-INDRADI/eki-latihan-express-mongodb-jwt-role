module.exports = {
  securitySchemes: { // SWAGGER V3 (COMPONENT) // https://swagger.io/docs/specification/authentication/
    // securityDefinitions: { // SWAGGER V2 (ROOT)
    token: {
      type: "apiKey",
      name: "x-access-token", //      name: "x-access-token",
      in: "header"
    }
  }

}
