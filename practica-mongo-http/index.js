const server = require('./server.js')

const port = 8080
server.listen(port, () => {
  console.log(`Running from server with port ${port}`)
})
