const { Schema, model } = require('mongoose')

const appointmentSchema = new Schema({
  id_client: { type: String, ref: 'client' },
  id_haircut: { type: String, ref: 'haircut' },
  hour: String,
})

module.exports = model('appointment', appointmentSchema)
