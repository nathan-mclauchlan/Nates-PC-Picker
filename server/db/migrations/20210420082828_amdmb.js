exports.up = (knex) => {
  return knex.schema.createTable('amdmb', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('model')
    table.string('cpuSocket')
    table.string('formFactor')
    table.string('chipset')
    table.string('memoryType')
    table.integer('memorySockets')
    table.string('maxMemory')
    table.string('memorySpeed')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('amdmb')
}
