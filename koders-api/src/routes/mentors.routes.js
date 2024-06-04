const useCaseMentors = require('../usecases/mentors.usecase')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const mentorData = req.body
    const newMentor = await useCaseMentors.create(mentorData)
    res.json({
      success: true,
      message: 'Mentor created',
      data: {
        mentor: newMentor
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at create mentor',
      error: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const mentors = await useCaseMentors.getAll()
    res.json({
      success: true,
      message: `All mentors ${mentors.length} mentors found`,
      data: {
        mentors
      }
    })
  } catch (error) {
    res.status(error.status || 400)
    res.json({
      success: false,
      message: 'Error at get all mentors',
      error: error.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const mentor = await useCaseMentors.getById(id)
    res.json({
      success: true,
      message: 'Mentor found',
      data: {
        mentor
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at get mentor',
      error: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const mentorDeleted = await useCaseMentors.deleteById(id)
    res.json({
      success: true,
      message: 'Mentor deleted',
      data: {
        mentor: mentorDeleted
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at delete mentor',
      error: error.message
    })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const newData = req.body
    const mentorUpdated = await useCaseMentors.updateById(id, newData)
    res.json({
      success: true,
      message: 'Mentor updated',
      data: {
        mentor: mentorUpdated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: 'Error at update mentor',
      error: error.message
    })
  }
})

module.exports = router