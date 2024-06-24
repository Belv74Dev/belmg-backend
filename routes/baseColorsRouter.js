const { Router } = require('express');

const { authUserMiddleware } = require('../middlewares/auth');

const baseColorsController = require('../controllers/baseColorsController');

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Темизация
 */

/**
 * @swagger
 * /base-colors/:id:
 *   get:
 *     summary: Получение пользовательской темы по id
 *     tags: [Темизация]
 */

/**
 * @swagger
 * /base-colors:
 *   post:
 *     summary: Создание пользовательской темы
 *     tags: [Темизация]
 */


/**
 * @swagger
 * /base-colors:
 *   get:
 *     summary: Получение Установка пользовательской темы по юзеру
 *     tags: [Темизация]
 */

/**
 * @swagger
 * /base-colors/:theme_id:
 *   delete:
 *     summary: Удаление пользовательской темы
 *     tags: [Темизация]
 */

/**
 * @swagger
 * /base-colors/:theme_id:
 *   patch:
 *     summary: Установка пользовательской темы
 *     tags: [Темизация]
 */

router.get('/', authUserMiddleware, baseColorsController.getBaseColorsByUser);
router.get('/all', authUserMiddleware, baseColorsController.getBaseColors);
router.get('/:id', baseColorsController.getBaseColorsById);
router.post('/', authUserMiddleware, baseColorsController.createBaseColors);
router.delete('/:theme_id', authUserMiddleware, baseColorsController.deleteBaseColors)
router.patch('/:theme_id', authUserMiddleware, baseColorsController.installBaseColors)

module.exports = router;