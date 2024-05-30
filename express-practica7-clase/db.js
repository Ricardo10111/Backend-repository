// const { json } = require('express')
const fs = require('fs')
const fileName = 'db.json'
const defaultData = {
  koders: [],
  mentors: []
}

function init() {
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, JSON.stringify(defaultData))
  } else {
    console.log('File exist')
  }
}

function readDb() {
  const dBAsString = fs.readFileSync(fileName, 'utf-8')
  return JSON.parse(dBAsString)
}

function writeDb(dataToWrite) {
  fs.writeFileSync(fileName, JSON.stringify(dataToWrite))
}

module.exports = {
  // init: init, es lo mismo de abajo pero en forma corta de escribirlo ->
  init,
  readDb,
  writeDb
}
