const User = require('../models/user');
const Workspace = require('../models/workspace');
const WorkspaceMember = require('../models/workspaceMember');

const getWorkspacesByUserId = async (req, res) => {
	try {
		const { id } = req.params;

		const workspaces = await Workspace.findAll({
			where: {
				owner_id: id,
			}
		})



	} catch (err) {
		if (err.name === 'SequelizeValidationError') {
			const errors = err.errors.map((e) => ({ field: e.path, message: e.message }));
			return res.status(400).json({
				status: 'error',
				errors
			});
		}

		return res.status(500).json({
			status: 'error',
			message: 'Ошибка сервера'
		});
	}
}

const createWorkspace = async (req, res) => {
	try {
		const { id } = req;
		const { name } = req.body;

		const workspace = await Workspace.create({ name, owner_id: id });

		const user = await User.findOne({
			where: { id }
		});

		await user.update({ last_workspace: workspace.id });

		await WorkspaceMember.create({
			role: 'admin',
			user_id: user.id,
			workspace_id: workspace.id,
		});

		return res.status(201).json({
			status: 'success',
			data: workspace
		});
	} catch (err) {
		if (err.name === 'SequelizeValidationError') {
			const errors = err.errors.map((e) => ({ field: e.path, message: e.message }));
			return res.status(400).json({
				status: 'error',
				errors
			});
		}

		return res.status(500).json({
			status: 'error',
			message: 'Ошибка сервера'
		});
	}
};

const deleteWorkspace = async (req, res) => {
	try {
		const { id } = req;
		const { workspace_id } = req.params;

		const workspace = await Workspace.findOne({
			where: {
				id: workspace_id,
				owner_id: id,
			}
		});

		if (!workspace) {
			return res.status(400).json({
				status: 'error',
				errors: [{ message: 'Ошибка удаление рабочего пространства' }]
			});
		}

		await workspace.destroy();

		return res.status(200).json({
			status: 'success',
		});
	} catch (err) {
		if (err.name === 'SequelizeValidationError') {
			const errors = err.errors.map((e) => ({ field: e.path, message: e.message }));
			return res.status(400).json({
				status: 'error',
				errors
			});
		}

		return res.status(500).json({
			status: 'error',
			message: 'Ошибка сервера'
		});
	}
};

const updateWorkspace = async (req, res) => {
	try {
		const { id } = req;
		const { workspace_id } = req.params;
		const { name } = req.body;

		const workspace = await Workspace.findOne({
			where: { id: workspace_id }
		});

		if (!workspace) {
			return res.status(400).json({
				status: 'error',
				errors: [{ message: 'Рабочее пространство не найдено' }]
			});
		}

		await workspace.update({ name });

		return res.status(200).json({
			status: 'success',
		});
	} catch (err) {
		if (err.name === 'SequelizeValidationError') {
			const errors = err.errors.map((e) => ({ field: e.path, message: e.message }));
			return res.status(400).json({
				status: 'error',
				errors
			});
		}

		return res.status(500).json({
			status: 'error',
			message: 'Ошибка сервера'
		});
	}
};

const getWorkspace = async (req, res) => {
	try {
		const { id } = req;
		const { workspace_id } = req.params;

		const workspace = await Workspace.findOne({
			where: { id: workspace_id },
		});

		return res.status(200).json({
			status: 'success',
			data: workspace,
		});
	} catch (err) {
		console.log(`err`, err)
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

module.exports = {
	getWorkspacesByUserId,
	createWorkspace,
	deleteWorkspace,
	updateWorkspace,
	getWorkspace,
};
