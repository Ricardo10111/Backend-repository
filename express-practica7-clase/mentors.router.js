const express = require('express')
const router = express.Router()
const mentorsUseCase = require('./mentors.usecase')

router.use((req, res, next) => {
  console.log('Middleware a nivel de router de mentors')
  next()
})

router.get('/', (req, res) => {
  try {
    const mentors = mentorsUseCase.getAll()
    res.json({
      message: 'All mentors',
      data: {
        mentors
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      error: error.message
    })
  }
})

router.post('/', (req, res) => {
  try {
    const newMentor = req.body
    const mentors = mentorsUseCase.add(newMentor)
    res.json({
      message: 'Mentor added',
      data: {
        mentors
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      error: error.message
    })
  }
})

router.delete('/', (req, res) => {
  try {
    const mentors = mentorsUseCase.deleteAll()
    res.json({
      message: 'All mentors deleted',
      data: {
        mentors
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      error: error.message
    })
  }
})

router.delete('/:name', (req, res) => {
  try {
    const name = req.params.name
    const mentors = mentorsUseCase.deleteBy(name)
    res.json({
      message: 'Mentor deleted',
      data: {
        mentors
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      error: error.message
    })
  }
})

module.exports = router
