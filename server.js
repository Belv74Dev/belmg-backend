const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require('./utils/swaggerDefinition');
const corsOptions = require('./utils/corsOptions');
const router = require('./routes');

const createServer = () => {
	const app = express();

	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
	app.use(cors(corsOptions));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	router(app);

	return app;
}

module.exports = createServer;