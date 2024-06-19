const corsOptions = {
	origin: [
		"http://localhost",
		"http://localhost:80",
		"http://localhost:3000",
		"http://localhost:6006",
		"http://localhost:5173",
	],
	optionsSuccessStatus: 200,
};


module.exports = corsOptions;