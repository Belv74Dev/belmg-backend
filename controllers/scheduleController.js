const Schedule = require('../models/schedule');
const User = require('../models/user');
const Task = require('../models/task');

const createSchedule = async (req, res) => {
	try {
		const { id } = req;
		const { workspace_id } = req.params;
		const { date, time_start, time_end, } = req.body;

		const schedule = await Schedule.create({
			date: new Date(time_start),
			time_start: new Date(time_start),
			time_end: new Date(time_end),
			user_id: id,
			workspace_id: workspace_id,
		});

		return res.status(200).json({
			status: 'success'
		});
	} catch (err) {
		console.log(`Error: ${err}`)
		return res.status(500);
	}
};

const getSchedulesUser = async (req, res) => {
	try {
		const { id } = req;
		const { workspace_id } = req.params;

		const schedulesActive = await Schedule.findAll({
			where: {
				workspace_id,
				user_id: id,
				status: 'active'
			},
			include: {
				model: User,
				include: {
					model: Task
				}
			}
		});

		const schedulesDisable = await Schedule.findAll({
			where: {
				workspace_id,
				user_id: id,
				status: 'disable'
			},
			include: {
				model: User,
				include: {
					model: Task
				}
			}
		});

		return res.status(200).json({
			status: 'success',
			data: {
				schedulesActive,
				schedulesDisable,
			},
		});
	} catch (err) {
		console.log(`Error: ${err}`)
		return res.status(500);
	}
};

const getSchedulesAdmin = async (req, res) => {
	try {
		const { id } = req;
		const { workspace_id } = req.params;

		const schedulesActive = await Schedule.findAll({
			where: {
				workspace_id,
				status: 'active'
			},
			include: {
				model: User,
			}
		});

		const schedulesDisable = await Schedule.findAll({
			where: {
				workspace_id,
				status: 'disable'
			},
			include: {
				model: User,
				// include: {
				// 	// model: Task
				// }
			}
		})

		return res.status(200).json({
			status: 'success',
			data: {
				schedulesActive,
				schedulesDisable,
			},
		});
	} catch (err) {
		return res.status(500);
	}
};

const updateSchedule = async (req, res) => {
	try {
		const { id } = req;
		const { workspace_id, schedule_id } = req.params;

		const schedule = await Schedule.findOne({
			where: {
				id: schedule_id,
				workspace_id: workspace_id,
				status: 'active',
			}
		});

		await schedule.update({
			status: 'disable',
		});

		return res.status(200).json({
			status: 'success'
		});
	} catch (err) {
		console.log(`Error: ${err}`)
		return res.status(500);
	}
};


module.exports = {
	createSchedule,
	getSchedulesUser,
	getSchedulesAdmin,
	updateSchedule,
};