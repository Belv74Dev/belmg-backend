const swaggerJSDoc = require('swagger-jsdoc');

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Турбо Трекинг API",
			version: "0.0.1",
		},
	},
	apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;