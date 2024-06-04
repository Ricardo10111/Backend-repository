const createError = require('http-errors')
const encrypt = require('../lib/encrypt.js')
const Koders = require('../models/koders.model')

async function create(koderData) {
  const koderFound = await Koders.findOne({ email: koderData.email })
  if (koderFound) {
    // throw new Error('Email ya registrado')
    throw createError(409, 'Email already in use')
  }
  // const password = await encrypt(koderData.password)
  // koderData.password = password
  koderData.password = await encrypt.encrypt(koderData.password)

  const newKoder = await Koders.create(koderData)
  return newKoder
}

async function getAll() {
  const allkoders = await Koders.find()
  return allkoders
}

async function getById(id) {
  const koder = await Koders.findById(id)
  return koder
}

async function deleteById(id) {
  const koderDeleted = await Koders.findByIdAndDelete(id)
  return koderDeleted
}

async function updateById(id, newData) {
  const updateKoder = await Koders.findByIdAndUpdate(id, newData, { new: true })
  return updateKoder
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById
}
