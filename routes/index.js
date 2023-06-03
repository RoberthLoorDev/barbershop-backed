const { Router } = require('express')
const clientRoute = require('./client.route')

const router = Router()
const defaultRoutes = [
  {
    path: '/users',
    route: clientRoute,
  },
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

module.exports = router
