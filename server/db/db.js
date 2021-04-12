const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  addWidgets
}

function getWidgets (db = connection) {
  return db('widgets').select()
}

function addWidgets (widget, db = connection) {
  return db('widgets').insert({
    name: 'Green widget',
    price: 1337,
    mfg: 'Acme Inc.',
    inStock: 666
  })
}
