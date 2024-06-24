const Task = require('../models/task');
const Column = require('../models/column');
const Comment = require('../models/comment');

const createTask = async (req, res) => {
	try {
		const { id } = req;
		// const {  } = req.params;
		const {
			name,
			status,
			tag_id,
			user_id,
			date_start,
			time_start,
			date_end,
			time_end,
			description,
			column_id,
		} = req.body;

		console.log('\n\n\n\n\ 155')

		const column = await Column.findOne({
			where: { id: column_id },
			include: {
				model: Task
			}
		});

		console.log(column)
		console.log('\n\n\n\n\ 156')
		console.log('data tag member', description, status, tag_id)

		const task = await Task.create({
			name,
			position: column.tasks.length + 1,
			tag_id,
			user_id,
			status,
			date_start: new Date(date_start && date_start.split('.').reverse().join('.')),
			time_start: new Date(time_start),
			date_end: new Date(date_end && date_end.split('.').reverse().join('.')),
			time_end: new Date(time_end),
			description: JSON.stringify(description),
			column_id: column.id,
		});

		return res.status(201).json({
			status: 'success',
			data: task
		});
	} catch (err) {
		console.log(`Error1`, err)
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

const getTask = async (req, res) => {
	try {
		const { task_id } = req.params;

		const task = await Task.findOne({
			where: { id: task_id }
		})

		return res.status(200).json({
			status: 'success',
			data: task
		});
	} catch (err) {
		console.log(`Error1`, err)
		if (err.name === 'SequelizeValidationError') {
			const errors = err.errors.map((e) => ({ field: e.path, message: e.message }));
			return res.status(400).json({
				status: 'error',
				errors
			});
		}

		return res.status(500).json({ status: 'error' });
	}
}

const updateTaskPosition = async (req, res) => {
	try {
		const { id } = req;
		const { updateTasks } = req.body;

		updateTasks.forEach(({ columnId, tasks }) => {
			tasks.forEach(async (newTask, index) => {
				// console.log(columnId, newTask, index)
				const lastTask = await Task.findOne({
					where: { id: newTask.id }
				})
				await lastTask.update({
					position: index,
					column_id: columnId
				})
			});
		})

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
	createTask,
	getTask,
	updateTaskPosition,
};