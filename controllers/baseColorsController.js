const BaseColors = require('../models/baseColors');
const ThemeUser = require('../models/themeUser');
const User = require('../models/user');

const getBaseColorsById = async (req, res) => {
	try {
		const { id } = req.params;

		const baseColors = await BaseColors.findOne({ where: { id } });

		return res.status(200).json({
			status: 'success',
			data: baseColors,
		});
	} catch (err) {
		return res.status(500);
	}
};

const getBaseColors = async (req, res) => {
	try {
		const { id } = req;

		const baseColor = await BaseColors.findAll({
			// where: {
			// 	user_id: id
			// }
		})

		return res.status(200).json({
			status: 'success',
			data: baseColor,
		})
	} catch (err) {
		return res.status(500)
	}
}

const createBaseColors = async (req, res) => {
	try {
		const { id } = req;
		const {
			name,
			primary,
			secondary,
			info,
			danger,
			warning,
			success,
			neutral
		} = req.body;

		const baseColors = await BaseColors.create({
			name,
			primary,
			secondary,
			info,
			danger,
			warning,
			success,
			neutral
		});

		console.log(baseColors)

		await ThemeUser.create({
			user_id: id,
			themeId: baseColors.id
		});

		return res.status(200).json({
			status: 'success',
			data: baseColors
		});
	} catch (err) {
		if (err.name === 'SequelizeValidationError') {
			const errors = err.errors.map((e) => ({ field: e.path, message: e.message }));
			res.status(400).json({
				status: 'error',
				errors
			});
		}
		return res.status(500).json({ status: 'error' });
	}
};

const getBaseColorsByUser = async (req, res) => {
	try {
		console.log('\n\n\n\n\n\ 5557')
		const { id } = req;
		// conosle.log('id', id7

		const baseColors = await User.findOne({
			where: {
				id,
			},
			include: [{
				model: BaseColors,
			}],
		});

		return res.status(200).json({
			status: 'success',
			data: baseColors.baseColor
		});
	} catch (err) {
		if (err.name === 'SequelizeValidationError') {
			const errors = err.errors.map((e) => ({ field: e.path, message: e.message }));
			res.status(400).json({
				status: 'error',
				errors
			});
		}

		return res.status(500).json({ status: 'error' });
	}
};

const installBaseColors = async (req, res) => {
	try {
		const { id } = req;
		const { theme_id } = req.params;

		const user = await User.findOne({
			where: { id }
		})

		const theme = await BaseColors.findOne({
			where: { id: theme_id },
		});

		user.update({ theme: theme.id });

		return res.status(200).json({
			status: 'success',
			data: theme
		});
	} catch (err) {
		if (err.name === 'SequelizeValidationError') {
			const errors = err.errors.map((e) => ({ field: e.path, message: e.message }));
			res.status(400).json({
				status: 'error',
				errors
			});
		}

		return res.status(500).json({ status: 'error' });
	}
}

const deleteBaseColors = async (req, res) => {
	try {
		const { id } = req;
		const { theme_id } = req.params;

		const theme = await BaseColors.findOne({
			where: { id: theme_id },
			include: [{
				model: User,
				where: { id: id }
			}],
			attributes: ['id', 'name']
		});

		await theme.destroy();

		return res.status(200).json({
			status: 'success',
			data: theme
		});
	} catch (err) {
		console.log('Err', err);
		if (err.name === 'SequelizeValidationError') {
			const errors = err.errors.map((e) => ({ field: e.path, message: e.message }));
			res.status(400).json({
				status: 'error',
				errors
			});
		}

		return res.status(500).json({ status: 'error' });
	}
}

module.exports = {
	getBaseColorsById,
	getBaseColors,
	createBaseColors,
	getBaseColorsByUser,
	installBaseColors,
	deleteBaseColors,
};