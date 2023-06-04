const { Router } = require('express')
const { AppointmentController } = require('../controllers')

const router = Router()

router.get('/getAllAppointments', AppointmentController.getAllAppointment)
router.post('/createAppointment', AppointmentController.createAppointment)

module.exports = router
