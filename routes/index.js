const authRouter = require('./authRouter');
const baseColorsRouter = require('./baseColorsRouter');
const userRouter = require('./userRouter');
const workspaceRouter = require('./workspaceRouter');
const notificationRouter = require('./notificationRouter');

function router(app) {
	app.use('/auth', authRouter);
	app.use('/base-colors', baseColorsRouter);
	app.use('/user', userRouter);
	app.use('/notifications', notificationRouter);
	app.use('/workspaces', workspaceRouter);
}

module.exports = router;