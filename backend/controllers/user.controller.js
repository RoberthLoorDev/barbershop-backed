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
    res.status(200).json({ message: 'usuario creado exitosamente', data: user })
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error: error })
  }
}

exports.getUserbyId = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await UserModel.findById(userId)

    if (!user) res.status(500).json({ data: 'Usuario no encontrado' })
    res.status(200).json(user)
  } catch (error) {
    res
      .status(500)
      .json({ error: error, message: 'Error al consultar usuario' })
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find()
    res.status(200).json(allUsers)
  } catch (err) {
    res
      .status(500)
      .json({ error: err, message: 'Error al consultar los datos' })
  }
}
