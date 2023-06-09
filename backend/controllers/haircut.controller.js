const { HaircutModel } = require('../models')

//create haircut
exports.createHaircut = async (req, res) => {
  try {
    const { title, price, description, imagen } = req.body
    const haircut = new HaircutModel({
      title,
      price,
      description,
      imagen,
    })

    await haircut.save()
    res.status(200).json({ message: 'Dato ingresado', data: haircut })
  } catch (error) {
    res.status(500).json({ message: 'Error al ingresar', error: error })
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
