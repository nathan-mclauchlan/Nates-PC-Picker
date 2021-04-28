exports.up = (knex) => {
  return knex.schema.createTable('storagedrives', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('model')
    table.string('formFactor')
    table.string('capacity')
    table.string('writeSpeed')
    table.string('readSpeed')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('storagedrives')
}
