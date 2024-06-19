const { Router } = require('express');

const { authUserMiddleware } = require('../middlewares/auth');

const scheduleController = require('../controllers/scheduleController');

const router = Router({ mergeParams: true });

/**
 * @swagger
 * tags:
 *   name: Расписание
 */

/**
 * @swagger
 * workspaces/:workspace_id/schedules:
 *   post:
 *     summary: Создание свободного окна
 *     tags: [Расписание]
 */

/**
 * @swagger
 * workspaces/:workspace_id/schedules/:schedule_id:
 *   patch:
 *     summary: Утверждение смены
 *     tags: [Расписание]
 */

/**
 * @swagger
 * workspaces/:workspace_id/schedules/user:
 *   get:
 *     summary: Получение календаря пользователя
 *     tags: [Расписание]
 */

/**
 * @swagger
 * workspaces/:workspace_id/schedules/admin:
 *   get:
 *     summary: Получение календаря администратора
 *     tags: [Расписание]
 */

router.post('/', authUserMiddleware, scheduleController.createSchedule);
router.get('/user', authUserMiddleware, scheduleController.getSchedulesUser);
router.get('/admin', authUserMiddleware, scheduleController.getSchedulesAdmin);
router.patch('/:schedule_id', authUserMiddleware, scheduleController.updateSchedule);

module.exports = router;