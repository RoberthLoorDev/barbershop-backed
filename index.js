const express = require('express')
const { Config } = require('./config/index.js')
const { Database } = require('./database/index.js')
const routes = require('./routes')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is my hello world')
})
app.use('/api', routes)

Database.connectDB()

app.listen(Config.Port, () => {
  console.log('Hola')
})
