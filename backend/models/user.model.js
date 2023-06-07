const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: String,
  lastname: String,
  rol: { type: String, default: 'client' },
  phone: String,
  email: String,
  password: String,
})

module.exports = model('user', userSchema)
