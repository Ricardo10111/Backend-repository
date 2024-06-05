const authUseCase = require('../usecases/auth.usecase')
const express = require('express')
const router = express.Router()

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const token = await authUseCase.logIn(email, password)
    res.json({
      success: true,
      message: 'Logged in',
      data: {
        token
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      message: 'Error at login',
      error: error.message
    })
  }
})

module.exports = router
