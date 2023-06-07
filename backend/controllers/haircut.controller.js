const { HaircutModel } = require('../models')

//create haircut
exports.createHaircut = async (req, res) => {
  try {
    const { tittle, price, description, imagen } = req.body
    const haircut = new HaircutModel({
      tittle,
      price,
      description,
      imagen,
    })

    await haircut.save()
    res
      .status(200)
      .json({ error: 'false', message: 'Dato ingresado', data: haircut })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'true', message: 'Error al ingresar', error: error })
  }
}

//get all haircuts
exports.getAllHaircuts = async (req, res) => {
  try {
    const allHaircuts = await HaircutModel.find()
    res.status(200).json(allHaircuts)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error al obtener los datos',
      error: err,
    })
  }
}
