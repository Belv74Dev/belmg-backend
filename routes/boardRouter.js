const { Router } = require('express');

const { authUserMiddleware } = require('../middlewares/auth');

const boardController = require('./../controllers/boardController');

const columnRouter = require('./columnRouter');
const taskRouter = require('./taskRouter');

const router = Router({ mergeParams: true });

/**
 * @swagger
 * tags:
 *   name: Доски
 */

/**
 * @swagger
 * /workspaces/:workspace_id/boards:
 *   post:
 *     summary: Создание доски
 *     tags: [Доски]
 */

/**
 * @swagger
 * /workspaces/:workspace_id/boards:
 *   get:
 *     summary: Получение досок рабочего пространства
 *     tags: [Доски]
 */

/**
 * @swagger
 * /workspaces/:workspace_id/boards/:board_id:
 *   delete:
 *     summary: Удаление доски по id
 *     tags: [Доски]
 */

/**
 * @swagger
 * /workspaces/:workspace_id/boards/:board_id:
 *   delete:
 *     summary: Удаление доски по id
 *     tags: [Доски]
 */

router.post('/', authUserMiddleware, boardController.createBoard);
router.get('/', authUserMiddleware, boardController.getBoards);
router.get('/:board_id', authUserMiddleware, boardController.getBoard);
router.delete('/:board_id', authUserMiddleware, boardController.deleteBoard);

router.use('/:board_id/columns', columnRouter)
router.use('/:board_id/tasks', taskRouter)

module.exports = router;