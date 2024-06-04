const mongoose = require('mongoose')

const modelName = 'koder'

const koderSchema = new mongoose.Schema({
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
  email: {
    type: String,
    required: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
  },
  birthDate: {
    type: Date,
    required: false
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  // generation: {
  //     type: Number,
  //     min: 1,
  //     max: 100,
  //     required: true
  // },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model(modelName, koderSchema)
