const { Router } = require('express')
const { AppointmentController } = require('../controllers')

const router = Router()

router.get('/all', AppointmentController.getAllAppointment)
router.post('/create', AppointmentController.createAppointment)
router.get('/:id', AppointmentController.getAppointmentByUserId)

module.exports = router
