const { Router } = require('express');

const { authUserMiddleware } = require('../middlewares/auth');

const tagController = require('../controllers/tagController');

const router = Router({ mergeParams: true });

/**
 * @swagger
 * tags:
 *   name: Теги
 */

/**
 * @swagger
 * /workspaces/:workspace_id/tags:
 *   post:
 *     summary: Создание тега
 *     tags: [Теги]
 */

/**
 * @swagger
 * /workspaces/:workspace_id/tags:
 *   post:
 *     summary: Получение тегов рабочего пространства
 *     tags: [Теги]
 */

/**
 * @swagger
 * /workspaces/:workspace_id/tags/:tag_id:
 *   delete:
 *     summary: Удаление тега
 *     tags: [Теги]
 */

router.post('/', authUserMiddleware, tagController.createTag);
router.get('/', authUserMiddleware, tagController.getTags);

module.exports = router;