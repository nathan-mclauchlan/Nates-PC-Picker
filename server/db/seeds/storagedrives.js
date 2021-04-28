exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('storagedrives').del()
    .then(() => {
      // Inserts seed entries
      return knex('storagedrives').insert([
        { id: 1, name: 'Samsung', model: '970 Evo', formFactor: 'M.2', capacity: '500GB', writeSpeed: '2300MBps', readSpeed: '3400MBps' },
        { id: 2, name: 'Samsung', model: '870 Evo QVO', formFactor: '2.5', capacity: '1000GB', writeSpeed: '530MBps', readSpeed: '560MBps' },
        { id: 3, name: 'Samsung', model: '870 Evo', formFactor: '2.5', capacity: '1000GB', writeSpeed: '530MBps', readSpeed: '560MBps' },
        { id: 4, name: 'Seagate', model: 'Barracuda', formFactor: '3.5', capacity: '2TB', writeSpeed: '172MBps', readSpeed: '202MBps' },
        { id: 5, name: 'Seagate', model: 'Barracuda', formFactor: '3.5', capacity: '4TB', writeSpeed: '172MBps', readSpeed: '202MBps' },
        { id: 6, name: 'Samsung', model: '860 Pro', formFactor: '2.5', capacity: '4TB', writeSpeed: '530MBps', readSpeed: '560MBps' }
      ])
    })
}
