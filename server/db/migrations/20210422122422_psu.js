exports.up = (knex) => {
  return knex.schema.createTable('psu', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('model')
    table.string('formFactor')
    table.string('rating')
    table.string('powerOutput')
    table.string('modular')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('psu')
}
