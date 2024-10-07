const express =  require('express')
const router = express.Router()
const createTaskController = require('../controllers/task_controller/createTask')
const updateTaskController = require('../controllers/task_controller/updateTask')
const deleteTaskController = require('../controllers/task_controller/deleteTask')
const getTaskController = require('../controllers/task_controller/getTask')

router.get('/:action_id', getTaskController.get_tasks_by_action)
router.post('/create', createTaskController.create_task)
router.put('/update/:id', updateTaskController.update_task)
router.put('/delete/:id', deleteTaskController.deleteTask)
router.put('/delete/user/:task_id/:user_id', deleteTaskController.deleteTaskUser)



module.exports = router