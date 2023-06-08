const { Schema, model } = require('mongoose')

const appointmentSchema = new Schema({
  id_user: { required: true, type: Schema.Types.ObjectId, ref: 'client' },
  id_haircut: { required: true, type: Schema.Types.ObjectId, ref: 'haircut' },
  hour: { required: true, type: String },
})

module.exports = model('appointment', appointmentSchema)
