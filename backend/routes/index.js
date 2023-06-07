const { Router } = require('express')
const clientRoute = require('./user.route')
const haircutRoute = require('./haircut.route')
const appointmentRoute = require('./appointment.route')
const chatRoute = require('./chat.route')

const router = Router()
const defaultRoutes = [
  {
    path: '/user',
    route: clientRoute,
  },
  {
    path: '/haircut',
    route: haircutRoute,
  },
  {
    path: '/appointment',
    route: appointmentRoute,
  },
  {
    path: '/chat',
    route: chatRoute,
  },
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

module.exports = router
