exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('fans').del()
    .then(() => {
      // Inserts seed entries
      return knex('fans').insert([
        { id: 1, name: 'Deepcool', model: 'RF120', fanSize: '120mm', bearingType: 'Hydro Bearing', soundLevel: '27db', LedColour: 'Rainbow' },
        { id: 2, name: 'Cooler Master', model: 'Sickle Flow', fanSize: '120mm', bearingType: 'Rifle Bearing', soundLevel: '27db', LedColour: 'White' },
        { id: 3, name: 'Noctua', model: 'NF-A14', fanSize: '140mm', bearingType: 'SS02', soundLevel: '24db', LedColour: 'None' },
        { id: 4, name: 'NZXT', model: 'Aer', fanSize: '140mm', bearingType: 'Fluid Bearing', soundLevel: '33db', LedColour: 'Rainbow' },
        { id: 5, name: 'Cooler Master', model: 'MF200R', fanSize: '200mm', bearingType: 'SE', soundLevel: '28db', LedColour: 'Rainbow' },
        { id: 6, name: 'Deepcool', model: 'XFAN', fanSize: '80mm', bearingType: 'Fluid Bearing', soundLevel: '20db', LedColour: 'None' }
      ])
    })
}
