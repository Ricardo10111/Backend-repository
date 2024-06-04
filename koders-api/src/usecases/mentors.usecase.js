const mentorsModel = require('../models/mentors.model')

async function create(mentorData) {
  const newMentor = await mentorsModel.create(mentorData)
  return newMentor
}

async function getAll() {
  const allMentors = await mentorsModel.find()
  return allMentors
}

async function getById(id) {
  const mentor = await mentorsModel.findById(id)
  return mentor
}

async function deleteById(id) {
  const mentorDeleted = await mentorsModel.findByIdAndDelete(id)
  return mentorDeleted
}

async function updateById(id, newData) {
  const updateMentor = await mentorsModel.findByIdAndUpdate(id, newData, {
    new: true
  })
  return updateMentor
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById
}
