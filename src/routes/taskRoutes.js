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

/**
 * @swagger
 * /task/update/{id}:
 *   put:
 *     summary: Update a task by its ID
 *     description: Updates details of a specific task based on its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: uuid
 *         required: true
 *         description: ID of the task to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               planned_eta:
 *                 type: string
 *                 description: The planned ETA for the task
 *                 example: "2024-10-10T09:00:00Z"
 *               custom_planned_eta:
 *                 type: string
 *                 format: date-time
 *                 description: Custom planned ETA for the task
 *                 example: "2024-10-15T09:00:00Z"
 *               actual_eta:
 *                 type: string
 *                 format: date-time
 *                 description: Actual time taken to complete the task
 *                 example: "2024-10-20T09:00:00Z"
 *               reason_id:
 *                 type: integer
 *                 description: ID of the reason associated with this task
 *                 example: 2
 *               task_status:
 *                 type: string
 *                 description: The status of the task
 *                 example: "Completed"
 *     responses:
 *       200:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "task updated successfully"
 *                 task:
 *                   $ref: '#/components/schemas/Task'
 *       400:
 *         description: Task ID is required or invalid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Task ID is required"
 *       404:
 *         description: Task not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "task not found"
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
 */


router.put('/update/:id', updateTaskController.update_task)

/**
 * @swagger
 * /task/delete/{id}:
 *   put:
 *     summary: Delete a task by its ID
 *     description: Deletes details of a specific task based on its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: uuid
 *         required: true
 *         description: ID of the task to delete
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "task deleted successfully"
 *       400:
 *         description: Task ID is required or invalid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Task ID is required"
 *       404:
 *         description: Task not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "task not found"
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
 */

router.put('/delete/:id', deleteTaskController.deleteTask)

// /**
//  * @swagger
//  * /task/delete/user/{task_id}/{user_id}:
//  *   put:
//  *     summary: Delete a task by its ID
//  *     description: Deletes details of a specific task based on its ID.
//  *     parameters:
//  *       - in: path
//  *         name: task_id
//  *         schema:
//  *           type: uuid
//  *         required: true
//  *         description: ID of the task to delete
//  *         name: user_id
//  *         schema:
//  *           type: uuid
//  *         required: true
//  *         description: User ID to delete
//  *     responses:
//  *       200:
//  *         description: Task User deleted successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 message:
//  *                   type: string
//  *                   example: "task deleted successfully"
//  *       400:
//  *         description: Task ID is required or invalid
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 message:
//  *                   type: string
//  *                   example: "Task ID is required"
//  *       404:
//  *         description: Task not found
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 message:
//  *                   type: string
//  *                   example: "task not found"
//  *       500:
//  *         description: Internal Server Error
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 message:
//  *                   type: string
//  *                   example: "Internal server error"
//  */

router.put('/delete/user/:task_id/:user_id', deleteTaskController.deleteTaskUser)



module.exports = router