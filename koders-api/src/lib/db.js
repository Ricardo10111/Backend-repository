const mongosse = require('mongoose')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect() {
  return mongosse.connect(URI)
}

module.exports = { connect }
