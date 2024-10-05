const express =  require('express')
const router = express.Router()
const mastercontroller = require('../controllers/goal_controller')

router.post('/create', mastercontroller.create_goal)
// router.get('/hashtags', mastercontroller.get_master_hashtags)
// router.post('/hashtags', mastercontroller.get_master_hashtags)

module.exports = router