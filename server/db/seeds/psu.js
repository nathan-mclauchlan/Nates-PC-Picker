exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('psu').del()
    .then(() => {
      // Inserts seed entries
      return knex('psu').insert([
        { id: 1, name: 'EVGA', model: 'GD', formFactor: 'ATX', rating: 'Gold', powerOutput: '700w', modular: 'No' },
        { id: 2, name: 'Corsair', model: 'RM850X', formFactor: 'ATX', rating: 'Gold', powerOutput: '850w', modular: 'Full' },
        { id: 3, name: 'Cooler Master', model: 'V SFX', formFactor: 'SFX', rating: 'Gold', powerOutput: '850w', modular: 'Full' },
        { id: 4, name: 'Corsair', model: 'SF750P', formFactor: 'SFX', rating: 'Platinum', powerOutput: '750w', modular: 'Full' },
        { id: 5, name: 'Asus', model: 'Rog Thor', formFactor: 'ATX', rating: 'Platinum', powerOutput: '1200w', modular: 'Full' },
        { id: 6, name: 'Corsair', model: 'AX1000', formFactor: 'ATX', rating: 'Titanium', powerOutput: '1000w', modular: 'Full' },
        { id: 7, name: 'Gigabyte', model: 'P1000GM', formFactor: 'ATX', rating: 'Gold', powerOutput: '1000w', modular: 'Full' }
      ])
    })
}
