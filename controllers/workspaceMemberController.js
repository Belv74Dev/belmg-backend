const User = require("../models/user");
const WorkspaceMember = require("../models/workspaceMember");

const getWorkspaceMemberRole = async (req, res) => {
	try {
		const { id } = req;
		const { workspace_id } = req.params;

		const workspaceMember = await WorkspaceMember.findOne({
			where: {
				user_id: id,
				workspace_id,
			},
		});

		return res.status(200).json({
			status: 'success',
			data: workspaceMember.role
		});
	} catch (err) {
		console.log('Error', err);
		return res.status(500);
	}
}

const getWorkspaceMembers = async (req, res) => {
	try {
		const { id } = req;
		const { workspace_id } = req.params;

		const workspaceMembers = await WorkspaceMember.findAll({
			where: { workspace_id }
		});

		const members = await Promise.all(
			workspaceMembers.map(async (item) => {
				const user = await User.findOne({ where: { id: item.dataValues.user_id } });
				return {
					memberRole: item.dataValues.role,
					id: user.dataValues.id,
					username: user.dataValues.username,
					first_name: user.dataValues.first_name,
					last_name: user.dataValues.last_name,
				};
			}));

		return res.status(200).json({
			status: 'success',
			data: members
		});
	} catch (err) {
		console.log(err)
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

const deleteWorkspaceMember = async (req, res) => {
	try {
		console.log('\n\n\n\n\n991')
		const { id } = req;
		const { workspace_id, user_id } = req.params;
		console.log('\n\n\n\n\n992')
		if (id === user_id) {
			return res.status(400).json({
				status: 'error',
				errors: [{ message: 'Нельзя удалить себя' }]
			});
		}
		console.log('\n\n\n\n\n993')

		const workspaceAdmin = await WorkspaceMember.findOne({
			where: {
				user_id: id,
				workspace_id: workspace_id,
				role: 'admin'
			}
		});


		console.log('\n\n\n\n\n994')

		if (!workspaceAdmin) {
			return res.status(401).json({
				status: 'error',
				errors: [{ message: 'У вас нет прав на выполнение данного действия' }]
			});
		}

		console.log('\n\n\n\n\n995')

		const workspaceMembers = await WorkspaceMember.findOne({
			where: { workspace_id, user_id }
		});

		console.log('\n\n\n\n\n991')

		workspaceMembers.destroy();

		return res.status(200).json({ status: 'success' });

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

module.exports = {
	getWorkspaceMemberRole,
	getWorkspaceMembers,
	deleteWorkspaceMember
}