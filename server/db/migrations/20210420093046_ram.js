exports.up = (knex) => {
  return knex.schema.createTable('ram', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('model')
    table.string('type')
    table.string('amount')
    table.string('speed')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('ram')
}
