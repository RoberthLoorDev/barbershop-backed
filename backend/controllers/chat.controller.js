const { ChatModel } = require('../models')

exports.createChat = async (req, res) => {
  try {
    const { id_user, id_user_barber, message } = req.body

    const chat = new ChatModel({
      id_user,
      id_user_barber,
      message,
    })
    await chat.save()
    res
      .status(200)
      .json({ error: 'false', message: 'Chat created', data: chat })
  } catch (err) {
    res.status(500).json({
      message: 'error in create chat',
      error: err,
    })
  }
}
