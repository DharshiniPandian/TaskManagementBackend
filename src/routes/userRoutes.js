const express = require("express")
const router = express.Router()
const usercontroller = require('../controllers/user_controller')

router.get('/users',  usercontroller.get_master_users)

module.exports = router