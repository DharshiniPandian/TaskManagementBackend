const express =  require('express')
const router = express.Router()
const mastercontroller = require('../controllers/master_controller')

router.get('/domains', mastercontroller.get_master_domains)
router.get('/hashtags', mastercontroller.get_master_hashtags)
router.get('/users', mastercontroller.get_users)
router.post('/hashtags', mastercontroller.create_master_hashtags)

module.exports = router