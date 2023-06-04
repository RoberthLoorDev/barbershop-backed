const { Router } = require('express')
const clientRoute = require('./client.route')
const haircutRoute = require('./haircut.route')
const appointmentRoute = require('./appointment.model')

const router = Router()
const defaultRoutes = [
  {
    path: '/users',
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
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

module.exports = router
