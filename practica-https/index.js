const http = require('http')
// request = peticion del cliente
// response = respuesta del servidor
// cliente = navegador

function listadoKoders() {
  return
}
const server = http.createServer((request, response) => {
  console.log('request:', request)
  const method = request.method
  const url = request.url

  if (url.startsWith('/koders')) {
    if (method === 'GET') {
      response.end('Aqui estan todos los koders')
    }

    if (method === 'POST') {
      response.end('Aqui puedes crear un koder')
    }

    if (method === 'DELETE') {
      response.end('Aqui puedes borrar un koder')
    }

    if (method === 'PATCH') {
      response.end('Aqui puedes actualizar un koder')
    }

    if (method === 'PUT') {
      response.end('Aqui puedes reemplazar un koder')
    }
  }
  response.end(`${method}: ${url} `)
})

server.listen(8080, () => {
  console.log('Server is listening on port 8080')
})

// const otherServer = http.createServer((request, response) => {
//   response.end('Hey World from another server');
// } );

// otherServer.listen(8081, () => {
//   console.log("Server is listening on port 8081");
// }     );

/* methods
GET -> obtener informacion, (no lleva body)
POST -> crear informacion
DELETE -> borrar informacion
PATCH -> actualizar informacion
PUT -> reemplazar informacion
*/

/*URL https://api.kodemia.mx/koders

GET https://api.kodemia.mx/koders -> listado de koders
POST https://api.kodemia.mx/koders -> Crear un koder
DELETE https://api.kodemia.mx/koders -> Borrar un koder*/

/*URL https://api.kodemia.mx/mentores
GET https://api.kodemia.mx/mentores -> Listado de mentores
GET https://api.kodemia.mx/mentores/123/bootcamps -> Listado de bootcamp de el mentor con id 123
 */
