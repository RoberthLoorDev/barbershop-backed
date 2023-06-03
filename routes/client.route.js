const express = require('express')

const { ClientController } = require('../controllers')

const router = express.Router()

router.post('/createUser', ClientController.createClient)
router.get('/getAllUsers', ClientController.getAllClients)

module.exports = router
