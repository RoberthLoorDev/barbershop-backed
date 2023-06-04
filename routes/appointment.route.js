const { Router } = require('express')
const { AppointmentController } = require('../controllers')

const router = Router()

router.get('/getAll', AppointmentController.getAllAppointment)
router.post('/create', AppointmentController.createAppointment)

module.exports = router
