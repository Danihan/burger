const orm = require('../config/orm')

async function selectAll () {
  return orm.selectAll('burgers')
}

async function insertOne (data) {
  return orm.insertOne('burgers', data)
}

async function updateOne (id, data) {
  return orm.updateOne('burgers', id, data)
}

module.exports = {
  selectAll,
  insertOne,
  updateOne
}
