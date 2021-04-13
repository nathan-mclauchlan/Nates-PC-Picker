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
  const { inStock, mfg, name, price } = req.body
  db.addWidget({ inStock, mfg, name, price })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteWidget(id)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const { inStock, mfg, name, price, rating } = req.body
  db.updateWidget(id, { inStock, mfg, name, price, rating })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
