const { HaircutController } = require('../controllers')
const { Router } = require('express')

const router = Router()

router.get('/all', HaircutController.getAllHaircuts)
router.post('/create', HaircutController.createHaircut)

module.exports = router
