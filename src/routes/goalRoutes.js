const express =  require('express')
const router = express.Router()
const goalcreatecontroller = require('../controllers/goal_controller/createGoal')
const getgoalcontroller = require('../controllers/goal_controller/getGoal')
const deletecontroller = require('../controllers/goal_controller/delete')

router.get('/', getgoalcontroller.getAllGoals)
router.get('/:id', getgoalcontroller.getGoalById)
router.put('/deletegoal/:id', deletecontroller.deleteGoal)
router.post('/create', goalcreatecontroller.create_goal)
router.put('/deletephase/:id', deletecontroller.deleteGoalPhase)
router.put('/deletephaseuser/:phase_id/:user_id', deletecontroller.deleteGoalPhaseUser)
// router.get('/hashtags', mastercontroller.get_master_hashtags)
// router.post('/hashtags', mastercontroller.get_master_hashtags)

module.exports = router