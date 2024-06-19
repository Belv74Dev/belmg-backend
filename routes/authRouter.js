const { Router } = require('express');

const { authUserMiddleware } = require('../middlewares/auth');

const authController = require('../controllers/authController');

const router = Router();

/**
* @swagger
* tags:
*   name: Аутентификация
*/

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Авторизация пользователя
 *     tags: [Аутентификация]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Успешная авторизация
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Регистрация пользователя
 *     tags: [Аутентификация]
 * 
 *  @swagger
 *  /auth/check:
 *   post:
 *     summary: Проверка аторизации полльзователя
 *     tags: [Аутентификация]
 */

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/check', authUserMiddleware, authController.checkAuth)

module.exports = router;