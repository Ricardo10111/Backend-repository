const express = require('express')

const { Koder } = require('./db')
// /koders
const router = express.Router()


router.post('/', (req, res) => {
  try {
    const newKoder = new Koder(req.body)
    const koderSaved = newKoder.save()

    res.json({
      message: 'Koder created',
      
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      error: error.message
    })
  }
})

module.exports = router