exports.up = (knex) => {
  return knex.schema.createTable('fans', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('model')
    table.string('fanSize')
    table.string('bearingType')
    table.string('soundLevel')
    table.string('LedColour')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('fans')
}
