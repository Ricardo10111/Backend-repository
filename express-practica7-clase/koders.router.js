const express = require('express')
const kodersUseCase = require('./koders.usecase') // Importamos el caso de uso de koders

// /koders
const router = express.Router()

router.use((req, res, next) => {
  console.log('Middleware a nivel de router de koders')
  next()
})

// un endpoint es la combinación de un método y una ruta URL

router.get(
  '/',
  (req, res, next) => {
    console.log('Middleware a nivel de endpoint GET /koders', req.isAWizard)
    next()
  },
  (req, res) => {
    try {
      const koders = kodersUseCase.getAll()
      res.json({
        message: 'All koders',
        data: {
          koders
        }
      })
    } catch (error) {
      res.status(error.status || 500)
      res.json({
        error: error.message
      })
    }
  }
)

router.post('/', (req, res) => {
  try {
    const newKoder = req.body
    const koders = kodersUseCase.add(newKoder)
    res.json({
      message: 'Koder added',
      data: {
        koders
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
    const koders = kodersUseCase.deleteAll()
    res.json({
      message: 'All koders deleted',
      data: {
        koders
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
    const koders = kodersUseCase.deleteBy(name)
    res.json({
      message: 'Koder deleted',
      data: {
        koders
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

// single responsibility principle -> principio de responsabilidad única -> cada archivo debe tener una sola responsabilidad
