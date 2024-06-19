const Tag = require('../models/tag');

const createTag = async (req, res) => {
	try {
		const { id } = req;
		const { workspace_id } = req.params;
		const { name, color } = req.body;

		await Tag.create({
			name,
			color,
			workspace_id,
		});

		return res.status(200).json({
			status: 'success',
		});
	} catch (err) {
		console.log(`Error ${err}`)
		return res.status(500);
	}
};

const getTags = async (req, res) => {
	try {
		const { id } = req;
		const { workspace_id } = req.params;

		const tags = await Tag.findAll({
			where: { workspace_id }
		});

		return res.status(200).json({
			status: 'success',
			data: tags,
		});
	} catch (err) {
		console.log(`Error ${err}`)
		return res.status(500);
	}
};

module.exports = {
	createTag,
	getTags
};