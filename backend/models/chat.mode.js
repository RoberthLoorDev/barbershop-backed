const { Schema, model } = require('mongoose')

const chatSchema = new Schema({
  id_user: {
    required: true,
    type: String,
    ref: 'user',
  },
  id_user_barber: {
    required: true,
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
        ref: 'user',
      },
      message: {
        type: Array,
        default: [],
      },
    },
  ],
})

module.exports = model('chat', chatSchema)
