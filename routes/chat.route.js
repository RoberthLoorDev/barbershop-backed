const { ChatController } = require('../controllers')
const { Router } = require('express')

const router = Router()

router.post('/create', ChatController.createChat)

module.exports = router
