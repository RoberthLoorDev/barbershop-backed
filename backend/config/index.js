require('dotenv').config()

module.exports.Config = {
  MongoUri: process.env.MONGO_URI,
  Port: process.env.PC_PORT,
}
