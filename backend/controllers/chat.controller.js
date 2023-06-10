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
    res.status(200).json({ message: 'Chat creado', data: chat })
  } catch (error) {
    res.status(500).json({
      message: 'error al crear chat',
      error: error,
    })
  }
}

exports.updateChat = async (req, res) => {
  try {
    const chatId = req.params.id
    const { id_user, message } = req.body

    const chat = await ChatModel.findById(chatId)
    if (!chat) res.status(404).json({ message: 'Chat no encontrado' })

    const newMessage = {
      id_user: id_user,
      message: message,
    }

    chat.message.push(newMessage)
    await chat.save()

    res.status(201).json(chat)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error })
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

    res.status(200).json(chats)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error al obtener los chats',
      error: error,
    })
  }
}
