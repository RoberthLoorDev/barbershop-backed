const { ClientModel } = require('../models')

exports.createClient = async (req, res) => {
  try {
    const { name, lastname, phone, email, password } = req.body
    const client = new ClientModel({
      name,
      lastname,
      phone,
      email,
      password,
    })

    await client.save()
    res
      .status(200)
      .json({ error: 'false', message: 'Cliente creado exitosamente' })
  } catch (err) {
    res.status(500).json({ error: err, message: 'Error al crear el cliente' })
  }
}

exports.getAllClients = async (req, res) => {
  try {
    const allUsers = await ClientModel.find()
    res.status(200).json(allUsers)
  } catch (err) {
    res
      .status(500)
      .json({ error: err, message: 'Error al consultar los datos' })
  }
}
