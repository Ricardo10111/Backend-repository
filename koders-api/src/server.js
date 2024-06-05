const express = require('express')
const kodersRouter = require('./routes/koders.routes')
const mentorsRouter = require('./routes/mentors.routes')
const authRouter = require('./routes/auth.router')
const generationRouter = require('./routes/generation.router')
const auth = require('./middlewares/auth.middleware')

const kodersUseCase = require('./usecases/koders.usecase')
const mentorsUseCase = require('./usecases/mentors.usecase')
const generationUseCase = require('./usecases/generations.usecase')

const app = express()
app.use(express.json())

app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/auth', authRouter)
app.use('/generations', generationRouter)


app.get('/', auth, (req, res) => {
  res.json({
    message: 'koders-api V1',
    alldata: {
      koders: kodersUseCase.getAll(),
      mentors: mentorsUseCase.getAll(),
      generations: generationUseCase.getAll()
    }
  })
})

module.exports = app
