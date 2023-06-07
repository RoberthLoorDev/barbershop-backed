const { Schema, model } = require('mongoose')

const haircutSchema = new Schema({
  tittle: String,
  price: Number,
  description: String,
  imagen: { type: String },
})

module.exports = model('haircut', haircutSchema)
