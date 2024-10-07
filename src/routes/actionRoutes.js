const express =  require('express')
const router = express.Router()
const createActionController = require('../controllers/action_controller/createAction')
const getActionController = require('../controllers/action_controller/getAction')
const updateActionController = require('../controllers/action_controller/updateAction')
const deleteActionController = require('../controllers/action_controller/deleteAction')

router.get('/', getActionController.get_actions_by_goal_or_phase)
router.post('/create', createActionController.create_action)
router.put('/update/:id', updateActionController.update_action)
router.put('/delete/:id', deleteActionController.deleteAction)
router.put('/delete/user/:action_id/:user_id', deleteActionController.deleteActionUser)

module.exports = router