const { Schema, model } = require('mongoose')

const clientSchema = new Schema({
  name: String,
  lastname: String,
  rol: { type: String, default: 'client' },
  phone: String,
  email: String,
  password: String,
})

module.exports = model('client', clientSchema)
