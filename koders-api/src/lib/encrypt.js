const bcrypt = require('bcryptjs')

const SALT_ROUNDS = 10

function encrypt(passwordText) {
  return bcrypt.hashSync(passwordText, SALT_ROUNDS)
}

function comparePassword(passwordPlainText, passwordHash) {
  return bcrypt.compareSync(passwordPlainText, passwordHash)
}

module.exports = {
  encrypt,
  comparePassword
}