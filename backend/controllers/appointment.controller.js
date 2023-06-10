const { AppointmentModel } = require('../models')

exports.createAppointment = async (req, res) => {
  try {
    const { id_user, id_haircut, hour, available } = req.body
    const appointment = new AppointmentModel({
      id_user,
      id_haircut,
      hour,
      available,
    })

    await appointment.save()
    res.status(200).json({ message: 'Dato ingresado', data: appointment })
  } catch (error) {
    res.status(500).json({ message: 'Dato no ingresado', error: error })
  }
}

exports.getAllAppointment = async (req, res) => {
  try {
    const allAppointments = await AppointmentModel.find()
    res.status(200).json(allAppointments)
  } catch (err) {
    res
      .status(500)
      .json({ error: 'true', message: 'Error al obtener los datos', data: err })
  }
}

exports.getAppointmentByUserId = async (req, res) => {
  try {
    const userId = req.params.id

    const appointment = await AppointmentModel.find({
      id_user: userId,
    })
    if (!appointment)
      res.status(500).json({ error: 'true', message: 'citas no encontradas' })

    res.status(200).json(appointment)
  } catch (error) {
    res.status(500).json({
      message: 'Error al consultar las citas del usuario',
      error: error,
    })
  }
}
