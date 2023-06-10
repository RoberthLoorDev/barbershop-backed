const express = require('express')

const { UserController } = require('../controllers')

const router = express.Router()

router.post('/create', UserController.createUser)
router.get('/all', UserController.getAllUsers)
router.get('/:id', UserController.getUserbyId)

module.exports = router
