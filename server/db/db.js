const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  addWidget,
  deleteWidget
}

function getWidgets (db = connection) {
  return db('widgets').select()
}

function addWidget (widget, db = connection) {
  return db('widgets').insert(widget)
}

function deleteWidget (id, db = connection) {
  return db('widgets')
    .where('id', id)
    .delete()
}
