const sequelize = require('../utils/database');
const createDefaultBaseColor = require('../utils/createBaseColors');

const setupTest = () => {
	beforeAll(async () => {
		await sequelize.sync({ force: true });
		await createDefaultBaseColor();
	});

	afterAll(async () => {
		await sequelize.close();
	});
}


module.exports = setupTest;