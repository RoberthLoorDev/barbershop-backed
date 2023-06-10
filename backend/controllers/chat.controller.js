const { ChatModel, UserModel } = require('../models')

exports.createChat = async (req, res) => {
  try {
    const { id_user, id_user_barber, message } = req.body

    const existingChat = await ChatModel.findOne({
      id_user: id_user,
      id_user_barber: id_user_barber,
    })

    if (existingChat) res.status(200).json({ existingChat })

    const chat = new ChatModel({
      id_user,
      id_user_barber,
      message,
    })

    await chat.save()
    res.status(200).json({ message: 'Chat created', data: chat })
  } catch (error) {
    res.status(500).json({
      message: 'error in create chat',
      error: error,
    })
  }
}

exports.getChatsByBarber = async (req, res) => {
  try {
    const barber = await UserModel.findOne({
      rol: 'barber',
    })
    const { _id } = barber
    const chats = await ChatModel.find({
      id_user_barber: _id,
    })

    res.status(200).json({ chats })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error al obtener los chats',
      error: error,
    })
  }
}
