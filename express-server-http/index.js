const express = require('express')

const server = express()
const port = 8080

const koders = [
  {
    name: 'Ricardo',
    generation: '32'
  },
  {
    name: 'Fer',
    generation: '32'
  },
  {
    name: 'Ramon',
    generation: '32'
  }
]

// server.use habilita nuestro server para poder recibir peticiones en formato JSON ->

server.use(express.json())

server.get('/', (req, resp) => {
  console.log('GET root')

  resp.writeHead(200, {
    'Content-Type': 'text/plain',
    'yo-soy': 'Ricardo'
  })
  resp.end('hola mundo')
})

server.post('/koders', (req, resp) => {
  console.log(`body: ${resp.body}`);
  const newKoderName = req.body.name
  const newKoderGeneration = req.body.generation

  const newKoder = {
    name: newKoderName,
    generation: newKoderGeneration
  }

  koders.push(newKoder)
  resp.status(200)
  resp.json(koders)
})

// responder una lista de koders que exista
server.get('/koders', (req, resp) => {
  // esto es mano ->
  // resp.writeHead(200, {
  //     'Content-Type': 'application/json'
  // })
  // resp.end(JSON.stringify(koders))

  // esto es con express es lo mismo que lo de arriba ->
  resp.status(200)
  resp.json(koders)
})

server.patch('/koders', (req, resp) => {
  console.log('PATCH koders')
  resp.end('Patch from koders')
})

server.listen(port, () => {
  console.log('Server ready')
})
