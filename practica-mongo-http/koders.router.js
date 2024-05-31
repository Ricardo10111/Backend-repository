const express = require('express')

const { Koder } = require('./db')
// /koders
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const allKoders = await Koder.find()
    res.json({
      message: 'All koders',
      data: allKoders
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      error: error.message
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const newKoder = new Koder(req.body)
    const korderSaved = await newKoder.save()
    const allKoders = await Koder.find()
    res.status(201)
    res.json({
      message: 'Koder created',
      data: korderSaved,
      allData: allKoders
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      error: error.message
    })
  }
})

module.exports = router
