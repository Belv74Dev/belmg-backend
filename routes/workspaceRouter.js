const express = require('express');

const { authUserMiddleware } = require('../middlewares/auth');
const { isMemberWorkspaceMiddleware, isAdminWorkspaceMiddleware } = require('../middlewares/isMemberWorkspace');

const workspaceController = require('../controllers/workspaceController');

const workspaceMemberRouter = require('./workspaceMemberRouter')
const scheduleRouter = require('./scheduleRouter');
const tagRouter = require('./tagRouter');
const boardRouter = require('./boardRouter');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Рабочее пространство
 */

/**
 * @swagger
 * /workspaces:
 *   post:
 *     summary: Создание рабочего пространства
 *     tags: [Рабочее пространство]
 */

/**
 * @swagger
 * /workspaces/:workspace_id:
 *   delete:
 *     summary: Удаление рабочего пространства
 *     tags: [Рабочее пространство]
 */

/**
 * @swagger
 * /workspaces/:workspace_id:
 *   patch:
 *     summary: Обновление рабочего пространства
 *     tags: [Рабочее пространство]
 */

/**
 * @swagger
 * /workspaces/:workspace_id:
 *   get:
 *     summary: Получение рабочего пространства по id
 *     tags: [Рабочее пространство]
 */


router.get('/user/:user_id', workspaceController.getWorkspacesByUserId)

router.post('/', authUserMiddleware, workspaceController.createWorkspace);
router.delete('/:workspace_id', [authUserMiddleware, isAdminWorkspaceMiddleware], workspaceController.deleteWorkspace);
router.patch('/:workspace_id', [authUserMiddleware, isAdminWorkspaceMiddleware], workspaceController.updateWorkspace);
router.get('/:workspace_id', [authUserMiddleware, isMemberWorkspaceMiddleware], workspaceController.getWorkspace);

router.use('/:workspace_id/workspace-member', workspaceMemberRouter);
router.use('/:workspace_id/schedules', scheduleRouter);
router.use('/:workspace_id/tags', tagRouter);
router.use('/:workspace_id/boards', boardRouter);

module.exports = router;