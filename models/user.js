const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const BaseColors = require('./baseColors');

class User extends Sequelize.Model { }

User.init({
	username: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: {
			args: true,
			msg: 'Это имя пользователя уже занято',
		},
		validate: {
			len: {
				args: [4, 50],
				msg: 'Имя пользователя должно содержать от 4 до 50 символов',
			},
			is: {
				args: /^[a-zA-Z0-9_]{3,20}$/,
				msg:
					'Имя пользователя может содержать латинские буквы, цифры и подчёркивание',
			},
			notEmpty: {
				msg: 'Укажите имя пользователя',
			},
		}
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: {
				msg: 'Укажите пароль',
			},
		},
	},
	first_name: {
		type: DataTypes.STRING(50),
		allowNull: false,
		validate: {
			notEmpty: {
				msg: 'Укажите имя',
			},
		},
	},
	last_name: {
		type: DataTypes.STRING(50),
		allowNull: false,
		validate: {
			notEmpty: {
				msg: 'Укажите фамилию',
			},
		},
	},
	phone: {
		type: DataTypes.STRING(20),
		allowNull: false,
		validate: {
			len: {
				args: [11, 11],
				msg: 'Номер телефона должен состоять только из 11 цифр',
			},
			is: {
				args: /^(\+7|8)\d{10}$/,
				msg: 'Номер телефона должен быть в формате +7XXXXXXXXXX или 8XXXXXXXXXX',
			},
		},
		notEmpty: {
			msg: 'Укажите имя телефон',
		},
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isEmail: {
				msg: 'Укажите корректный email',
			},
			notEmpty: {
				msg: 'Укажите email',
			},
		},
	},
	role: {
		type: DataTypes.ENUM('admin', 'user'),
		allowNull: false,
		defaultValue: 'user'
	},
	avatar: {
		type: DataTypes.STRING,
		allowNull: true,
	},
}, {
	sequelize,
	modelName: 'user',
	defaultScope: {
		attributes: { exclude: ['createdAt', 'updatedAt'] }
	}
});

User.belongsTo(BaseColors, {
	foreignKey: {
		name: 'theme',
		allowNull: false,
		defaultValue: 1
	}
});

module.exports = User;

// User.belongsToMany(BaseColors, {
// 	through: 'themes',
// 	onDelete: 'CASCADE'
// });

// User.beforeDestroy(async (user, options) => {
// 	if (user.image && fs.existsSync(user.image)) {
// 		fs.unlink(
// 			path.join(__dirname, '../public/user_avatars', user.image),
// 			(err) => {
// 				if (err) console.error(err);
// 			},
// 		);
// 	}
// });

