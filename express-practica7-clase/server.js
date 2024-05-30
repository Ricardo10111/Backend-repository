// La definicion de nuestro servidor

const express = require('express')
const server = express()

const routerKoders = require('./koders.router')
const routerMentors = require('./mentors.router')

const kodersUseCase = require('./koders.usecase')
const mentorsUseCase = require('./mentors.usecase')

server.use(express.json())

// Middleware a nivel de aplicación
server.use((req, res, next) => {
  console.log('Middleware de aplicación')

  const authorization = req.headers.authorization
  if (authorization === 'alohomora') {
    req.isAWizard = true
    next()
  } else {
    res.status(403)
    res.json({
      message: 'No tienes acceso'
    })
  }
})

server.use((req, res, next) => {
  console.log('Middleware de aplicación 2')
  next()
})

server.use('/koders', routerKoders)
server.use('/mentors', routerMentors)

server.get('/', (req, res) => {
  res.json({
    message: 'All data',
    data: {
      koders: kodersUseCase.getAll(),
      mentors: mentorsUseCase.getAll()
    }
  })
})

module.exports = server
