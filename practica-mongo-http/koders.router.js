const express = require('express')

const  Koder  = require('./db')
// /koders
const router = express.Router()

router.get('/',  (req, res) => {
  try {
    const allKoders =  Koder.find()
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

router.post('/',  (req, res) => {
  try {
    const newKoder = new Koder(req.body)
    const koderCreated =  newKoder.save()
    res.status(201)
    res.json({
      message: 'Koder created',
      data: koderCreated
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      error: error.message
    })
  }
})

module.exports = router