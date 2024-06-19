const { Router } = require('express');

const { authUserMiddleware } = require('../middlewares/auth');

const taskController = require('../controllers/taskController');

const router = Router({ mergeParams: true });

/**
 * @swagger
 * tags:
 *   name: Задачи
 */

/**
 * @swagger
 * /workspaces/:workspace_id/boards/:board_id/tasks:
 *   post:
 *     summary: Создание задачи
 *     tags: [Задачи]
 */

/**
 * @swagger
 * /workspaces/:workspace_id/boards/:board_id/tasks:
 *   get:
 *     summary: Получение задач рабочего пространства
 *     tags: [Задачи]
 */

/**
 * @swagger
 * /workspaces/:workspace_id/boards/:board_id/tasks/:task_id:
 *   get:
 *     summary: Получение задачи
 *     tags: [Задачи]
 */

/**
 * @swagger
 * /workspaces/:workspace_id/boards/:board_id/tasks/position:
 *   patch:
 *     summary: Обновление позиции задачи
 *     tags: [Задачи]
 */

/**
 * @swagger
 * /workspaces/:workspace_id/boards/:board_id/tasks/:task_id:
 *   delete:
 *     summary: Удаление задачи
 *     tags: [Задачи]
 */


router.post('/', authUserMiddleware, taskController.createTask);
// router.patch('/', authUserMiddleware, taskController.updateTask);
// router.delete('/:task_id')
router.get('/:task_id', taskController.getTask)
router.patch('/position', authUserMiddleware, taskController.updateTaskPosition)

module.exports = router;