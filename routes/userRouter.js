const { Router } = require('express');

const { authUserMiddleware } = require('../middlewares/auth');

const userController = require('../controllers/userController');

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Пользователь
 */

/**
 * @swagger
 * /user:
 *   patch:
 *     summary: Обновление юзера
 *     tags: [Пользователь]
 */

/**
 * @swagger
 * /user/data:
 *   get:
 *     summary: Получение данных юзера
 *     tags: [Пользователь]
 */

/**
 * @swagger
 * /user/lastWorkspace:
 *   patch:
 *     summary: Обновление последнего рабочего пространства юзера
 *     tags: [Пользователь]
 */

/**
 * @swagger
 * /user/:user_id:
 *   delete:
 *     summary: Удаление юзера
 *     tags: [Пользователь]
 */

// router.get('/theme', authUserMiddleware, userController.getUserTheme);
router.get('/', authUserMiddleware, userController.getUserData);
router.patch('/', authUserMiddleware, userController.updateUser);
router.patch('/lastWorkspace', authUserMiddleware, userController.getWorkspaceByUser);

module.exports = router;