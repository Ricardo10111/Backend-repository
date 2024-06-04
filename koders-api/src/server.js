const express = require('express')
const kodersRouter = require('./routes/koders.routes')
const mentorsRouter = require('./routes/mentors.routes')
const kodersUseCase = require('./usecases/koders.usecase')
const mentorsUseCase = require('./usecases/mentors.usecase')

const app = express()
app.use(express.json())
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'koders-api V1',
    alldata: {
      koders: kodersUseCase.getAll(),
      mentors: mentorsUseCase.getAll()
    }
  })
})

module.exports = app
