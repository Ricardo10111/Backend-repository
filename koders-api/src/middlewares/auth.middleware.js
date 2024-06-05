const createError = require('http-errors')
const kodersUseCase = require('../usecases/koders.usecase')

const jwt = require('../lib/jwt')

async function auth(req, res, next) {
  try {
    const token = req.headers.authorization
    if (!token) throw createError(401, 'JWT is required')
    const payload = jwt.verify(token)
    const user = await kodersUseCase.getById(payload.id)
    req.user = user
    next()
  } catch (error) {
    res.status(401)
    res.json({
      success: false,
      message: 'Unauthorized',
      error: error.message
    })
  }
}

module.exports = auth
