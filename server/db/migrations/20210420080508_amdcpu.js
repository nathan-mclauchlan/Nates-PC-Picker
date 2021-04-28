exports.up = (knex) => {
  return knex.schema.createTable('amdcpu', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('model')
    table.integer('cores')
    table.integer('threads')
    table.string('baseClock')
    table.string('maxBoostClock')
    table.string('l2Cache')
    table.string('l3Cache')
    table.string('socket')
    table.string('memoryType')
    table.string('memorySpeed')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('amdcpu')
}
