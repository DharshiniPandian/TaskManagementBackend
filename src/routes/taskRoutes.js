const express =  require('express')
const router = express.Router()
const createTaskController = require('../controllers/task_controller/createTask')
const updateTaskController = require('../controllers/task_controller/updateTask')
const deleteTaskController = require('../controllers/task_controller/deleteTask')
const getTaskController = require('../controllers/task_controller/getTask')

/**
 * @swagger
 * /tasks/{action_id}:
 *   get:
 *     summary: Get tasks associated with a specific action
 *     description: Fetches all tasks related to a specific action using the action ID.
 *     parameters:
 *       - in: path
 *         name: action_id
 *         schema:
 *           type: uuid
 *         required: true
 *         description: ID of the action to fetch tasks for
 *     responses:
 *       200:
 *         description: Successfully fetched tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       400:
 *         description: Action ID is required or invalid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Action ID is required"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 *
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: uuid
 *           description: Unique identifier for the task
 *           example: 1
 *         task_title:
 *           type: string
 *           description: Title of the task
 *           example: "Task for planning project"
 *         custom_planned_eta:
 *           type: string
 *           format: date-time
 *           description: Custom planned ETA for the task
 *           example: "2024-10-10T09:00:00Z"
 *         plannedeta:
 *           type: object
 *           description: Associated planned ETA timeframe
 *           properties:
 *             name:
 *               type: string
 *               example: "Weekly"
 *         taskstatus:
 *           type: object
 *           description: Status of the task
 *           properties:
 *             name:
 *               type: string
 *               example: "In Progress"
 */

router.get('/:action_id', getTaskController.get_tasks_by_action)
router.post('/create', createTaskController.create_task)
router.put('/update/:id', updateTaskController.update_task)
router.put('/delete/:id', deleteTaskController.deleteTask)
router.put('/delete/user/:task_id/:user_id', deleteTaskController.deleteTaskUser)



module.exports = router