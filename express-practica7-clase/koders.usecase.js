const db = require('./db')

function add(newKoder) {
  if (!newKoder.name) throw new Error('Name is required')

  if (!newKoder.generation) throw new Error('Generation is required')

  newKoder.generation = parseInt(newKoder.generation)
  if (isNaN(newKoder.generation)) throw new Error('Generation must be a number')
  if (newKoder.generation <= 0)
    throw new Error('Generation must be greater than 0')

  if (!newKoder.gender) throw new Error('Gender is required')
  //   if (
  //     newKoder.gender.toLowerCase() !== 'm' &&
  //     newKoder.gender.toLowerCase() !== 'f'
  //   )
  //     throw new Error('Only m and f are acpted') es lo mismo que lo de abajo ->

  if (!['m', 'f', 'nb'].includes(newKoder.gender.toLowerCase()))
    throw new Error('Only m and f are acpted')

  if (!newKoder.age) throw new Error('Age is required')
  newKoder.age = parseInt(newKoder.age)
  if (isNaN(newKoder.age)) throw new Error('Age must be a number')
  if (newKoder.age <= 0) throw new Error('Age must be greater than 0')

  if (!newKoder.isActive) throw new Error('isActive is required')
  if (typeof newKoder.isActive !== 'boolean')
    throw new Error('isActive must be a boolean')

  const dbData = db.readDb()
  dbData.koders.push(newKoder)
  db.writeDb(dbData)
  return dbData.koders
}

function deleteAll() {
  const dbData = db.readDb()
  dbData.koders = []
  db.writeDb(dbData)
  return dbData.koders
}

function deleteBy(name) {
  if (!name) throw new Error('Name is required')
  const dbData = db.readDb()
  dbData.koders = dbData.koders.filter((koder) => koder.name !== name)
  db.writeDb(dbData)
  return dbData.koders
}

function getAll() {
  return db.readDb().koders
}

module.exports = {
  add,
  deleteAll,
  deleteBy,
  getAll
}
