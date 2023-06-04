const express = require('express')

const { UserController } = require('../controllers')

const router = express.Router()

router.post('/createUser', UserController.createUser)
router.get('/allUsers', UserController.getAllUsers)

module.exports = router
