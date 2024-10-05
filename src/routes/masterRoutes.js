const express =  require('express')
const router = express.Router()
const mastercontroller = require('../controllers/master_controller')

router.get('/domains', mastercontroller.get_master_domains)
// router.get('/hashtags', mastercontroller.get_master_hashtags)
// router.post('/hashtags', mastercontroller.get_master_hashtags)

module.exports = router