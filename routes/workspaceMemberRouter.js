const express = require('express');

const { authUserMiddleware } = require('../middlewares/auth');

const workspaceMemberController = require('../controllers/workspaceMemberController');

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * tags:
 *   name: Участники рабочего пространства
 */

/**
 * @swagger
 * /workspaces/:workspace_id/workspace-member/user_id:
 *   get:
 *     summary: Ужадение участника рабочего пространства
 *     tags: [Участники рабочего пространства]
 */

/**
 * @swagger
 * /workspaces/:workspace_id/workspace-member:
 *   get:
 *     summary: Получение участников рабочего пространства
 *     tags: [Участники рабочего пространства]
 */

/**
 * @swagger
 * /workspaces/:workspace_id/workspace-member/role:
 *   get:
 *     summary: Получение роли участника рабочего пространства
 *     tags: [Участники рабочего пространства]
 */

router.get('/', authUserMiddleware, workspaceMemberController.getWorkspaceMembers);
router.get('/role', authUserMiddleware, workspaceMemberController.getWorkspaceMemberRole);
router.delete('/:user_id', authUserMiddleware, workspaceMemberController.deleteWorkspaceMember);

module.exports = router;