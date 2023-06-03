const mongoose = require('mongoose')
const { Config } = require('../config/index.js')

const connectDB = async () => {
  try {
    const connected = await mongoose.connect(Config.MongoUri, {
      useNewUrlParser: true,
    })
    console.log('MongoDB connected')
  } catch (error) {
    console.log('Error en la conexion')
    console.log(error)
  }
}

module.exports.Database = {
  connectDB,
}
