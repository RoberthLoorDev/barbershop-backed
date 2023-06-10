const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  rol: { type: String, default: 'client' },
  phone: { type: String, required: true },
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: { type: String, required: true },
})

module.exports = model('user', userSchema)
