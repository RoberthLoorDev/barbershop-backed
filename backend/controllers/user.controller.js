const { UserModel } = require('../models')

exports.createUser = async (req, res) => {
  try {
    const { name, lastname, phone, email, password } = req.body
    const user = new UserModel({
      name,
      lastname,
      phone,
      email,
      password,
    })

    await user.save()
    res
      .status(200)
      .json({ error: 'false', message: 'usuario creado exitosamente' })
  } catch (err) {
    res.status(500).json({ error: err, message: 'Error al crear el usuario' })
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await ClientModel.find()
    res.status(200).json(allUsers)
  } catch (err) {
    res
      .status(500)
      .json({ error: err, message: 'Error al consultar los datos' })
  }
}
