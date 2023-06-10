const { ChatController } = require('../controllers')
const { Router } = require('express')

const router = Router()

router.post('/create', ChatController.createChat)
router.get('/barber', ChatController.getChatsByBarber)
router.put('/:id', ChatController.updateChat)

module.exports = router
