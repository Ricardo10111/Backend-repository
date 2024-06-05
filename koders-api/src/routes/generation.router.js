const useCaseGeneration = require('../usecases/generations.usecase')
const auth = require('../middlewares/auth.middleware')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const generationData = req.body
        const newGeneration = await useCaseGeneration.createGeneration(generationData)
        res.json({
            success: true,
            message: 'Generation created',
            data: {
                generation: newGeneration
            }
        })
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            success: false,
            message: 'Error at create generation',
            error: error.message
        })
    }
})

router.get('/', async (req, res) => {
  try {
    const generations = await useCaseGeneration.getAllGenerations()
    res.json({
      success: true,
      message: `All generations ${generations.length} generations found`,
      data: {
        generations
      }
    })
  } catch (error) {
    res.status(error.status || 400)
    res.json({
      success: false,
      message: 'Error at get all generations',
      error: error.message
    })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const id = req.params.id
    const generation = await useCaseGeneration.getGenerationById(id)
    res.json({
      success: true,
      message: 'Generation found',
      data: {
        generation
      }
    })
  } catch (error) {
    res.status(error.status || 400)
    res.json({
      success: false,
      message: 'Error at get generation by id',
      error: error.message
    })
  }
})

router.delete('/:id', auth, async (req, res) => {
  try {
    const id = req.params.id
    const generationDeleted = await useCaseGeneration.deleteGenerationById(id)
    res.json({
      success: true,
      message: 'Generation deleted',
      data: {
        generation: generationDeleted
      }
    })
  } catch (error) {
    res.status(error.status || 400)
    res.json({
      success: false,
      message: 'Error at delete generation',
      error: error.message
    })
  }
})

router.patch('/:id', auth, async (req, res) => {
  try {
    const id = req.params.id
    const newData = req.body
    const updatedGeneration = await useCaseGeneration.updateGenerationById(
      id,
      newData
    )
    res.json({
      success: true,
      message: 'Generation updated',
      data: {
        generation: updatedGeneration
      }
    })
  } catch (error) {
    res.status(error.status || 400)
    res.json({
      success: false,
      message: 'Error at update generation',
      error: error.message
    })
  }
})

module.exports = router
