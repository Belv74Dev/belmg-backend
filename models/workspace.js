const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const User = require('./user');

class Workspace extends Sequelize.Model { }

Workspace.init({
	name: {
		type: DataTypes.STRING(50),
		allowNull: false,
		validate: {
			notEmpty: {
				msg: 'Укажите имя рабочего пространства',
			},
		},
	},
}, {
	sequelize,
	modelName: 'workspace',
	defaultScope: {
		attributes: { exclude: ['createdAt', 'updatedAt'] }
	}
});

Workspace.belongsTo(User, {
	foreignKey: {
		name: 'owner_id',
		type: DataTypes.INTEGER,
		allowNull: false,
	}
});

User.belongsTo(Workspace, {
	foreignKey: {
		name: 'last_workspace',
		type: DataTypes.INTEGER,
		defaultValue: null
	}
});

module.exports = Workspace;