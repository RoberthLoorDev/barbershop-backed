const { AppointmentModel } = require('../models')

exports.createAppointment = async (req, res) => {
  try {
    const { id_client, id_haircut, hour } = req.body
    const appointment = new AppointmentModel({
      id_client,
      id_haircut,
      hour,
    })

    await appointment.save()
    res
      .status(200)
      .json({ error: 'false', message: 'Dato ingresado', data: appointment })
  } catch (err) {
    res
      .status(500)
      .json({ error: 'true', message: 'Dato no ingresado', error: err })
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
