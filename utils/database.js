const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const mode = process.env.MODE === 'test';
const name = process.env.DB_NAME;
const nameTest = process.env.DB_NAME_TEST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;

console.log(name)

const sequelize = new Sequelize(
	mode ? nameTest : name,
	user,
	password,
	{
		host,
		dialect,
		logging: !mode
	}
);

module.exports = sequelize;
