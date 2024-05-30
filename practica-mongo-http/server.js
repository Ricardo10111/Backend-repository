const express = require('express')
const server = express()

const kodersRouter = require('./koders.router')
const { Koder } = require('./db')


server.use(express.json())

server.use((req, res, next) => {
  const authorization = req.headers.authorization
    if (authorization === 'password') {
      req.isAWizard = true
      next()
    }else {
      res.status(403)
      res.json({
        message: 'No tienes acceso'
      })
    }
})

server.use('/koders', kodersRouter)

module.exports = server