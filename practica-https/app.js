// Crear un servidor que permita:
// - Registrar un nuevo koder [ POST /koders ]
// - Listar todos los koders [ GET /Koders ]
// - Eliminar koders por nombre [ DELETE /koders/:name ]
// - Eliminar todos los koders [DELETE /koders]
// Este servidor debe:
// - Usar un archivo.json como base de datos
// - Recibir los datos por http por medio de la url o el body
// - Cada ruta debe responder un json

const http = require("http");
const fs = require("fs");
const path = require("path");
const { parse } = require("querystring");

const server = http.createServer((request, response) => {       
    const { url, method } = request;
    const [urlPath, queryParams] = url.split("?");
    const [_, resource, id] = urlPath.split("/");
    let body = "";
    request.on("data", chunk => {
        body += chunk.toString();
    });
    request.on("end", () => {
        let status = 200;
        let responseObj = {};
        if (method === "POST" && resource === "koders") {
            const koder = JSON.parse(body);
            const koders = getKoders();
            koders.push(koder);
            saveKoders(koders);
            responseObj = { success: true };
        } else if (method === "GET" && resource === "koders") {
            responseObj = { koders: getKoders() };
        } else if (method === "DELETE" && resource === "koders") {
            saveKoders([]);
            responseObj = { success: true };
        } else if (method === "DELETE" && resource === "koders" && id) {
            const koders = getKoders();
            const filteredKoders = koders.filter(koder => koder.name !== id);
            saveKoders(filteredKoders);
            responseObj = { success: true };
        } else {
            status = 404;
            responseObj = { error: "Not found" };
        }
        response.writeHead(status, { "Content-Type": "application/json" });
        response.write(JSON.stringify(responseObj));
        response.end();
    });
}       );

server.listen(3000, () => {
    console.log("Servidor a la espera de conexiones en el puerto 3000");
}    );

function getKoders() {
    const koders = fs.readFileSync("koders.json", "utf8");
    return JSON.parse(koders);
}

function saveKoders(koders) {
    fs.writeFileSync("koders.json", JSON.stringify(koders, null, 2));
}   ;   

// Path: practica-https/koders.json
// [
//     {
    