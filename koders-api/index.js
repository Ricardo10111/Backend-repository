require('dotenv').config()
const server = require('./src/server')
const db = require('./src/lib/db')
const PORT = process.env.PORT || 8080

db.connect()
  .then(() => {
    console.log('DB Connected')
    server.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('DB connection ERROR:', error)
  })
