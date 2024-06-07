const Generation = require('../models/generations.model')
const createError = require('http-errors')

async function createGeneration(generationData) {
    const existingGeneration = await Generation.findOne({ number: generationData.number, program: generationData.program})
    if (existingGeneration) {
        throw createError(400, `Generation ${generationData.number} already exists`)
    }
  const generation = await Generation.create(generationData)
  return generation
}

async function getAllGenerations() {
  const generations = await Generation.find()
  return generations
}

async function getGenerationById(id) {
  const generation = await Generation.findById(id)
  return generation
}

async function deleteGenerationById(id) {
  const generationDeleted = await Generation.findByIdAndDelete(id)
  return generationDeleted
}

async function updateGenerationById(id, newData) {
  const updatedGeneration = await Generation.findByIdAndUpdate(id, newData, {
    new: true
  })
  return updatedGeneration
}

module.exports = {
  createGeneration,
  getAllGenerations,
  getGenerationById,
  deleteGenerationById,
  updateGenerationById
}
