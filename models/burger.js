const orm = require('../config/orm')

async function selectAll () {
  return orm.selectAll('burgers')
}

async function insertOne ({ name, devoured }) {
  return orm.insertOne('burgers', { name, devoured })
}

async function updateOne (id, { name, devoured }) {
  return orm.updateOne('burgers', id, { name, devoured })
}

module.exports = {
  selectAll,
  insertOne,
  updateOne
}
