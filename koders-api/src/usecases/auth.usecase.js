const createError = require('http-errors')

const Koders = require('../models/koders.model')
const encrypt = require('../lib/encrypt')
const jwt = require('../lib/jwt')

async function logIn(email, password) {
  const koder = await Koders.findOne({ email: email })
  if (!koder) throw createError(401, 'Invalid data')

  const isPasswordValid = await encrypt.comparePassword(password, koder.password)
  if (!isPasswordValid) throw createError(401, 'Invalid data')

  const token = jwt.sign({ id: koder._id })
  return token
}

module.exports = { logIn }
