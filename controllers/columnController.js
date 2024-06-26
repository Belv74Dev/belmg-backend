const Board = require('../models/board');
const Column = require('../models/column');

const createColumn = async (req, res) => {
	try {
		const { id } = req;
		const { board_id } = req.params;
		const { name } = req.body;

		const board = await Board.findOne({
			where: { id: board_id },
			include: {
				model: Column
			}
		});

		const column = await Column.create({
			name,
			position: board.columns.length + 1,
			board_id,
		});

		return res.status(201).json({
			status: 'success',
			data: column
		});
	} catch (err) {
		console.log(err)
		if (err.name === 'SequelizeValidationError') {
			const errors = err.errors.map((e) => ({ field: e.path, message: e.message }));
			return res.status(400).json({
				status: 'error',
				errors
			});
		}
		return res.status(500).json({ status: 'error' });
	}
};

const updateColumnPosition = async (req, res) => {
	try {
		const { id } = req;
		const { board_id } = req.params;
		const { updateColumns } = req.body;

		updateColumns.forEach(async (newColumn, index) => {
			const column = await Column.findOne({
				where: {
					name: newColumn,
					board_id,
				}
			});
			column.update({ position: index });
		});

		return res.status(200);
	} catch (err) {
		console.log(err)
		if (err.name === 'SequelizeValidationError') {
			const errors = err.errors.map((e) => ({ field: e.path, message: e.message }));
			return res.status(400).json({
				status: 'error',
				errors
			});
		}
		return res.status(500).json({ status: 'error' });
	}
};

module.exports = {
	createColumn,
	updateColumnPosition
};