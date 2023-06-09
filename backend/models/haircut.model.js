const { Schema, model } = require('mongoose')

const haircutSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  imagen: { type: String },
})

module.exports = model('haircut', haircutSchema)
