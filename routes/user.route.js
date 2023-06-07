const express = require('express')

const { UserController } = require('../controllers')

const router = express.Router()

router.post('/create', UserController.createUser)
router.get('/all', UserController.getAllUsers)

module.exports = router
