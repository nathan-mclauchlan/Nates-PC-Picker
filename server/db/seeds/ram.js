exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('ram').del()
    .then(() => {
      // Inserts seed entries
      return knex('ram').insert([
        { id: 1, name: 'HyperX', model: 'Fury', type: 'DDR4', amount: '16Gb (Two 8Gb Sticks)', speed: '3200MHz' },
        { id: 2, name: 'G.Skill', model: 'Trident Z', type: 'DDR4', amount: '16Gb (Two 8Gb Sticks)', speed: '3200MHz' },
        { id: 3, name: 'G.Skill', model: 'Trident Z Royal', type: 'DDR4', amount: '32Gb (Two 16Gb Sticks)', speed: '4000MHz' },
        { id: 4, name: 'G.Skill', model: 'Trident Z Royal', type: 'DDR4', amount: '64Gb (Two 32Gb Sticks)', speed: '4000MHz' },
        { id: 5, name: 'G.Skill', model: 'Ripjaws V Series', type: 'DDR4', amount: '256Gb (Eight 32Gb Sticks)', speed: '3200MHz' },
        { id: 6, name: 'Corsair', model: 'Vengeance Pro', type: 'DDR4', amount: '32Gb (Two 16Gb Sticks)', speed: '2666MHz' },
        { id: 7, name: 'G.Skill', model: 'Trident Z Neo', type: 'DDR4', amount: '128Gb (Four 32Gb Sticks)', speed: '3600MHz' }
      ])
    })
}