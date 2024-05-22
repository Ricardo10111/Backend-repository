const http = require("http");
// request = peticion del cliente
// response = respuesta del servidor
// cleinte = navegador
const server = http.createServer((request, response) => {
  console.log("Un cliente se ha conectado");
  // response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  response.write("La conexion ha sido correcta");
  response.end();
});

server.listen(3000, () => {
  console.log("Servidor a la espera de conexiones en el puerto 3000");
});
