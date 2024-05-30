require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

// modelo de datos (schema)
const Koder = mongoose.model(
  'koder',
  new mongoose.Schema({
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
    generation: {
      type: Number,
      min: 1,
      max: 100,
      required: true
    }
  })
)

mongoose
  .connect(MONGO_URI)

  .then(() => {
    console.log('Conectado a la base de datos')
  })
  .catch((error) => {
    console.error('Error al crear koder', error)
  })

  .catch((error) => {
    console.error('Error al conectar a la base de datos', error)
  })

module.exports = {
  Koder
}
