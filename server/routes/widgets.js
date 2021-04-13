const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getWidgets()
    .then(widgets => {
      res.json(widgets)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const name = req.body.name
  const price = req.body.price
  const mfg = req.body.mfg
  const inStock = req.body.inStock 
  
    db.addWidgets(name, price, mfg, inStock)
    .then(() => {
      res.status(200).send()
      return null})
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  db.delWidget(id)
    .then(() => {
      res.status(200).send()
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const { name, price, mfg, inStock } = req.body

  db.updateWidget(id, name, price, mfg, inStock)
    .then(() => {
      res.status(200).send()
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
