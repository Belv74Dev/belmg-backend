const User = require('../models/user');
const WorkspaceMember = require('../models/workspaceMember');

const isMemberWorkspaceMiddleware = async (req, res, next) => {
	try {
		const { id } = req;
		const { workspace_id } = req.params;

		const user = await User.findOne({ where: { id } });

		if (!user) {
			return res.status(403).json({
				status: 'error',
				message: 'Недостаточно прав',
			});
		}

		const workspaceMember = await WorkspaceMember.findOne({
			where: {
				user_id: id,
				workspace_id,
			}
		});

		if (!workspaceMember) {
			return res.status(403).json({
				status: 'error',
				message: 'Недостаточно прав',
			});
		}

		next();
	} catch (e) {
		return res.status(500).json({
			status: 'error',
			message: 'Ошибка сервера',
		});
	}
};

const isAdminWorkspaceMiddleware = (req, res, next) => {
	authUserMiddleware(req, res, async () => {
		try {
			const { id } = req;
			const { workspace_id } = req.params;

			const workspaceMember = await WorkspaceMember.findOne({
				where: {
					user_id: id,
					workspace_id,
				}
			});

			if (!workspaceMember || workspaceMember.role !== 'admin') {
				return res.status(403).json({
					status: 'error',
					message: 'Недостаточно прав',
				});
			}

			next();
		} catch (e) {
			return res.status(500).json({
				status: 'error',
				message: 'Ошибка сервера',
			});
		}
	});
};

module.exports = {
	isMemberWorkspaceMiddleware,
	isAdminWorkspaceMiddleware,
};
