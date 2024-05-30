const db = require('./db')

function add(newMentor) {
  if (!newMentor.name) throw new Error('New mentor name is required')
  if (!newMentor.module) throw new Error('New mentor module is required')

  newMentor.group = parseInt(newMentor.group)
  if (isNaN(newMentor.group))
    throw new Error('New mentor group must be a number')
  if (!newMentor.group) throw new Error('New mentor group is required')

  newMentor.age = parseInt(newMentor.age)
  if (isNaN(newMentor.age)) throw new Error('New mentor age must be a number')
  if (!newMentor.age) throw new Error('New mentor age is required')

  if (!newMentor.isActive) throw new Error('New mentor isActive is required')
  if (typeof newMentor.isActive !== 'boolean')
    throw new Error('New mentor isActive must be a boolean')

  const dbData = db.readDb()
  dbData.mentors.push(newMentor)
  db.writeDb(dbData)
  return dbData.mentors
}

function deleteAll() {
  const daData = db.readDb()
  daData.mentors = []
  db.writeDb(daData)
  return daData.mentors
}

function deleteBy(name) {
  const dbData = db.readDb()
  const newMentors = dbData.mentors.filter((mentor) => mentor.name !== name)
  dbData.mentors = newMentors
  db.writeDb(dbData)
  return dbData.mentors
}

function getAll() {
  return db.readDb().mentors
}

module.exports = {
  getAll,
  add,
  deleteAll,
  deleteBy
}
