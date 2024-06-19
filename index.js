const createServer = require('./server');
const dotenv = require('dotenv');

const sequelize = require('./utils/database');
const createDefaultBaseColor = require('./utils/createBaseColors');

dotenv.config();

const PORT = process.env.PORT;

const start = async () => {
	try {
		await sequelize.sync();
		await createDefaultBaseColor();
		const app = createServer();
		app.listen(PORT, () => {
			console.log(`Server is running at ${PORT}`);
		});
	} catch (err) {
		console.log(err);
	}
}

start();