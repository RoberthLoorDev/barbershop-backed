const { Schema, model } = require('mongoose')

const chatSchema = new Schema({
  id_user: {
    type: String,
    ref: 'user',
  },
  id_user_barber: {
    type: String,
    ref: 'user',
  },
  message: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      id_user: {
        type: String,
        ref: 'client',
      },
      message: {
        type: String,
      },
    },
  ],
})

module.exports = model('chat', chatSchema)
