const { Router } = require('express');

const { authUserMiddleware } = require('../middlewares/auth');

const columnController = require('../controllers/columnController');

const router = Router({ mergeParams: true });

/**
 * @swagger
 * tags:
 *   name: Столбцы
 */

/**
 * @swagger
 * /workspaces/:workspace_id/boards/:board_id/columns:
 *   post:
 *     summary: Получение столбцов доски
 *     tags: [Столбцы]
 */

/**
 * @swagger
 * /workspaces/:workspace_id/boards/:board_id/columns/position:
 *   patch:
 *     summary: Обновление позиции столбца
 *     tags: [Столбцы]
 */

/**
 * @swagger
 * /workspaces/:workspace_id/boards/:board_id/columns/:column_id:
 *   delete:
 *     summary: Удаление столбца
 *     tags: [Столбцы]
 */

router.post('/', authUserMiddleware, columnController.createColumn);
router.patch('/position', authUserMiddleware, columnController.updateColumnPosition);

module.exports = router;