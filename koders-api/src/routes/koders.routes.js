const useCaseKoders = require('../usecases/koders.usecase')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const koderData = req.body
    const newKoder = await useCaseKoders.create(koderData)
    res.json({
      success: true,
      message: 'Koder created',
      data: {
        koder: newKoder
      }
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      success: false,
      message: 'Error at create koder',
      error: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const koders = await useCaseKoders.getAll()
    res.json({
      success: true,
      message: `All koders  ${koders.length}  koders found`,
      data: {
        koders
      }
    })
  } catch (error) {
    res.status(error.status || 400)
    res.json({
      success: false,
      message: 'Error at get all koders',
      error: error.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    // const { id } = req.params
    const id = req.params.id
    const koder = await useCaseKoders.getById(id)
    res.json({
      success: true,
      message: 'Koder found',
      data: {
        koder
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at get koder',
      error: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const koderDeleted = await useCaseKoders.deleteById(id)
    res.json({
      success: true,
      message: 'Koder deleted',
      data: {
        koder: koderDeleted
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at delete koder',
      error: error.message
    })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const koderData = req.body
    const koderUpdated = await useCaseKoders.updateById(id, koderData)
    res.json({
      success: true,
      message: 'Koder updated',
      data: {
        koder: koderUpdated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at update koder',
      error: error.message
    })
  }
})

module.exports = router
