const { HaircutController } = require('../controllers')
const { Router } = require('express')

const router = Router()

router.get('/allHaircuts', HaircutController.getAllHaircuts)
router.post('/createHaircut', HaircutController.createHaircut)

module.exports = router
