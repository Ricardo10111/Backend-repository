const express = require('express')
const fs = require('fs')
const server = express()
const port = 8080

server.use(express.json)


const kodersFile = 'koders.json'
function init() {
    const fileExists = fs.existsSync(kodersFile);
    if (!fileExists) {
      fs.writeFileSync(kodersFile, JSON.stringify({ koders: [] }));
    } else {
      console.log("File already exists");
    }
  }
  init()
  server.get('/koders',(req, resp) => {
    
    resp.json({
        message: 'All Koders',
        koders: kodersFile
    })


  })

  server.post('/koders', (req, resp) => {
    const newkoder = req.body.koder;
  if (!newkoder) {
    resp.status(400);
    resp.json({
      message: "name is require",
    });
    return;
  }
  koders.push(newkoder);
  resp.json({
    message: "new added koder",
    koders: kodersFile,
  });
  })

  server.listen(port, ()=> {
    console.log(`Servidors desde el puerto ${port}`);
  })