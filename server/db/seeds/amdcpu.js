exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('amdcpu').del()
    .then(() => {
      // Inserts seed entries
      return knex('amd-cpu').insert([
        { id: 1, name: 'Ryzen 9', model: '5900X', cores: 12, threads: 24, baseClock: '3.7GHz', maxBoostClock: '4.8GHz', l2Cache: '6MB', l3Cache: '64MB', socket: 'Am4', memoryType: 'DDR4', memorySpeed: 'Up to 3200MHz' },
        { id: 2, name: 'Ryzen 9', model: '5950X', cores: 16, threads: 32, baseClock: '3.4GHz', maxBoostClock: '4.9GHz', l2Cache: '8MB', l3Cache: '64MB', socket: 'Am4', memoryType: 'DDR4', memorySpeed: 'Up to 3200MHz' },
        { id: 3, name: 'Ryzen 7', model: '3700X', cores: 8, threads: 16, baseClock: '3.6GHz', maxBoostClock: '4.4GHz', l2Cache: '4MB', l3Cache: '32MB', socket: 'Am4', memoryType: 'DDR4', memorySpeed: 'Up to 3200MHz' },
        { id: 4, name: 'Ryzen 5', model: '5600X', cores: 6, threads: 12, baseClock: '3.7GHz', maxBoostClock: '4.6GHz', l2Cache: '3MB', l3Cache: '32MB', socket: 'Am4', memoryType: 'DDR4', memorySpeed: 'Up to 3200MHz' },
        { id: 5, name: 'Threadripper', model: '3970X', cores: 32, threads: 64, baseClock: '3.7GHz', maxBoostClock: '4.5GHz', l2Cache: '16MB', l3Cache: '128MB', socket: 'sTRX4', memoryType: 'DDR4', memorySpeed: 'Up to 3200MHz' }
      ])
    })
}
