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
 *         planned_eta:
 *           type: integer
 *           description: Planned ETA for the task
 *           example: 3 
 *         custom_planned_eta:
 *           type: integer
 *           description: Custom planned ETA for the task
 *           example: 15
 *         plannedeta:
 *           type: integer
 *           description: Associated planned ETA timeframe
 *           example: 20
 *         taskstatus:
 *           type: integer
 *           description: ID of Status of the task
 *           example: 3
 */

router.get('/:action_id', getTaskController.get_tasks_by_action)

/**
 * @swagger
 * /task/create:
 *   post:
 *     summary: Create a new task
 *     description: Creates a new task with associated details and assigns users to the task.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               action_id:
 *                 type: integer
 *                 description: ID of the action associated with the task
 *                 example: 123
 *               task_title:
 *                 type: string
 *                 description: Title of the task
 *                 example: "Project Planning"
 *               planned_eta:
 *                 type: integer
 *                 description: ID of Planned estimated time of completion
 *                 example: 2
 *               custom_planned_eta:
 *                 type: integer
 *                 description: Custom planned estimated time of completion
 *                 example: 20
 *               actual_eta:
 *                 type: integer
 *                 description: Actual time of completion (if available)
 *                 example: 10
 *               reason_id:
 *                 type: integer
 *                 description: ID of the reason for any changes or delays
 *                 example: 2
 *               task_status:
 *                 type: string
 *                 description: Status of the task (e.g., In Progress, Completed)
 *                 example: 4
 *               created_by:
 *                 type: string
 *                 description: ID of the user who created the task
 *                 example: 1
 *               task_users:
 *                 type: array
 *                 description: Array of users associated with the task
 *                 items:
 *                   type: object
 *                   properties:
 *                     user_id:
 *                       type: integer
 *                       description: ID of the user
 *                       example: 4
 *                     is_owner:
 *                       type: boolean
 *                       description: Whether the user is the task owner
 *                       example: true
 *                     is_assignee:
 *                       type: boolean
 *                       description: Whether the user is assigned to the task
 *                       example: false
 *                     is_active:
 *                       type: boolean
 *                       description: Whether the user is currently active in the task
 *                       example: true
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Task created successfully"
 *                 task:
 *                   $ref: '#/components/schemas/Task'
 *                 users:
 *                   type: array
 *                   description: List of users associated with the task
 *                   items:
 *                     type: object
 *                     properties:
 *                       user_id:
 *                         type: integer
 *                         example: 456
 *                       is_owner:
 *                         type: boolean
 *                         example: true
 *                       is_assignee:
 *                         type: boolean
 *                         example: false
 *                       is_active:
 *                         type: boolean
 *                         example: true
 *       400:
 *         description: Missing required fields (task_title, action_id, or created_by)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Missing required fields"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */

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
 *                 description: ID of The planned ETA for the task
 *                 example: 3
 *               custom_planned_eta:
 *                 type: integer
 *                 description: Custom planned ETA for the task
 *                 example: 20
 *               actual_eta:
 *                 type: integer
 *                 format: date-time
 *                 description: Actual time taken to complete the task
 *                 example: 18
 *               reason_id:
 *                 type: integer
 *                 description: ID of the reason associated with this task
 *                 example: 2
 *               task_status:
 *                 type: string
 *                 description: ID of The status of the task
 *                 example: 3
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

/**
 * @swagger
 * /task/delete/user/{task_id}/{user_id}:
 *   put:
 *     summary: Soft delete a user from a specific task
 *     description: Soft deletes a user associated with a specific task by setting the "deleted_at" field for that user in the goal.
 *     parameters:
 *       - in: path
 *         name: task_id
 *         schema:
 *           type: uuid
 *         required: true
 *         description: ID of the task to delete
 *         example: 1
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: uuid
 *         required: true
 *         description: User ID to delete
 *         example: 1
 *     responses:
 *       200:
 *         description: Task User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "task user deleted successfully"
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

router.put('/delete/user/:task_id/:user_id', deleteTaskController.deleteTaskUser)



module.exports = router