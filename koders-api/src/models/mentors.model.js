const mongoose = require('mongoose')
const { create } = require('./koders.model')

const modelName = 'mentor'

const mentorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100
  },
  lastName: {
    type: String,
    required: false,
    maxLength: 100
  },
  module: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
  },
  birthDate: {
    type: Date,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model(modelName, mentorSchema)
