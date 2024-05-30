require('dotenv').config()
const mongoose = require('mongoose')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

// modelo de datos (schema)
const Koder = mongoose.model(
  'koder',
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 100
    },
    lastName: {
      type: String,
      required: false,
      maxLength: 100
    },
    email: {
      type: String,
      required: true,
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    },
    birthDate: {
      type: Date,
      required: false
    },
    generation: {
      type: Number,
      min: 1,
      max: 100,
      required: true
    }
  })
)

// mongo+srv es el protocolo para conectarse a un cluster de MongoDB Atlas
// protocolo://usuario:contraseña@servidor/basededatos
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Conexión exitosa')
    // insertar datos
    Koder.create({
      firstName: 'Ramom',
      lastName: 'Jimenez',
      email: 'ramop@gmail.com',
      birthDate: new Date('1965-10-10'),
      generation: 22
    })
      .then((koder) => {
        console.log('koder:', koder)
      })
      .catch((error) => {
        console.error('Error al crear koder', error)
      })
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos', error)
  })

console.log('Hola mundo')

// Promesas
/**
 * Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona
 * pendiente: estado inicial, no se ha completado ni ha fallado
 * cumplida: la operación se completó exitosamente (then)
 * rechazada: la operación falló (catch)
 */
