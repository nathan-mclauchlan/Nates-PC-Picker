exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('amdmb').del()
    .then(() => {
      // Inserts seed entries
      return knex('amdmb').insert([
        { id: 1, name: 'Gigabyte', model: 'B550I Aorus Pro', cpuSocket: 'AM4', formFactor: 'Mini-Itx', chipset: 'AMD B550', memoryType: 'DDR4', memorySockets: 2, maxMemory: '64GB', memorySpeed: '4866-2133MHz' },
        { id: 2, name: 'Asus', model: 'X570-I Rog Strix', cpuSocket: 'AM4', formFactor: 'Mini-Itx', chipset: 'X570', memoryType: 'DDR4', memorySockets: 2, maxMemory: '64GB', memorySpeed: '4800-2133MHz' },
        { id: 3, name: 'Gigabyte', model: 'TRX40 Aorus Master', cpuSocket: 'sTRX4', formFactor: 'EATX', chipset: 'TRX40', memoryType: 'DDR4', memorySockets: 8, maxMemory: '256GB', memorySpeed: '4400-2133MHz' },
        { id: 4, name: 'Asus', model: 'Zenith 2', cpuSocket: 'sTRX4', formFactor: 'ATX', chipset: 'TRX40', memoryType: 'DDR4', memorySockets: 8, maxMemory: '256GB', memorySpeed: '4733-2133MHz' },
        { id: 5, name: 'Asus', model: 'B550-A Rog Strix', cpuSocket: 'AM4', formFactor: 'ATX', chipset: 'B550', memoryType: 'DDR4', memorySockets: 4, maxMemory: '128GB', memorySpeed: '4600-2133MHz' },
        { id: 6, name: 'MSI', model: 'B450-A Pro Max', cpuSocket: 'AM4', formFactor: 'ATX', chipset: 'B450', memoryType: 'DDR4', memorySockets: 4, maxMemory: '128GB', memorySpeed: '3866-1866MHz' }
      ])
    })
}
