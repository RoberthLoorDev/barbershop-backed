const { Router } = require('express')
const clientRoute = require('./client.route')
const haircutRoute = require('./haircut.route')

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
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

module.exports = router
