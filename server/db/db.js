const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  addWidgets,
  delWidget,
  updateWidget
}

function getWidgets (db = connection) {
  return db('widgets').select()
}

function addWidgets (name, price, mfg, inStock, db = connection) {
  return db('widgets').insert(
    { name, price, mfg, inStock}
  )
}

function delWidget (id, db = connection) {
  return db('widgets').where('id', id).delete()
}

function updateWidget (id, name, price, mfg, inStock, db = connection) {
  return db('widgets').update(
    {name, price, mfg, inStock}
  )
}
