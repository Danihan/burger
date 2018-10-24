const connection = require('./connection')
const promisify = require('util').promisify

const queryPromisified = promisify(connection.query.bind(connection))

async function selectAll (table) {
  const results = await queryPromisified('SELECT * FROM ??', [table])

  return results
}

async function insertOne (table, data) {
  const results = await queryPromisified('INSERT INTO ?? SET ?', [table, data])

  return results
}

async function updateOne (table, id, data) {
  const results = await queryPromisified('UPDATE ?? SET ? WHERE id = ?', [table, data, id])

  return results
}

module.exports = {
  selectAll,
  insertOne,
  updateOne
}
