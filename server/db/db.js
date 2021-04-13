const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  addWidget
}

function getWidgets (db = connection) {
  return db('widgets').select()
}

function addWidget (name, price, mfg, inStock, db = connection) {
  console.log('I am the database')
  return db('widgets').insert({ name, price, mfg, inStock })
}