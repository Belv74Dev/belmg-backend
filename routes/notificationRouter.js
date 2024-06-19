const { Router } = require('express');

const { authUserMiddleware } = require('../middlewares/auth');

const notificationController = require('../controllers/notificationController');

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Уведомления
 */

/**
 * @swagger
 * /notifications:
 *   get:
 *     summary: Получение уведомления
 *     tags: [Уведомления]
 */

/**
 * @swagger
 * /notifications/invitation/workspace:
 *   post:
 *     summary: Создание уведомления
 *     tags: [Уведомления]
 */

/**
 * @swagger
 * /notifications/invitation/workspace/:workspace_id/accept:
 *   patch:
 *     summary: Обновление уведомления
 *     tags: [Уведомления]
 */

/**
 * @swagger
 * /notifications/:notification_id:
 *   delete:
 *     summary: Удаление уведомления
 *     tags: [Уведомления]
 */

router.get('/', authUserMiddleware, notificationController.getNotificationByUser)
router.post('/invitation/workspace', authUserMiddleware, notificationController.createNotification);
router.patch('/invitation/workspace/:workspace_id/accept', authUserMiddleware, notificationController.updateNotification);

module.exports = router;