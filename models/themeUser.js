const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const User = require('./user');
const BaseColors = require('./baseColors');

class ThemeUser extends Sequelize.Model { }

ThemeUser.init({
}, {
	sequelize,
	modelName: 'themeUser',
	defaultScope: {
		attributes: { exclude: ['createdAt', 'updatedAt'] }
	}
});

User.belongsToMany(BaseColors, {
	through: ThemeUser,
	foreignKey: 'user_id',
	onDelete: 'CASCADE'
});

BaseColors.belongsToMany(User, {
	through: ThemeUser,
	foreignKey: 'themeId',
	onDelete: 'CASCADE'
});

module.exports = ThemeUser;