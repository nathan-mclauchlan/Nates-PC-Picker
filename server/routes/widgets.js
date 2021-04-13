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
  const { name, inStock, mfg, price } = req.body
  db.addWidget({ inStock, mfg, name, price })
    .then((id) => {
      res.status(200).send()
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
router.delete('/:id', (req, res) => {
  db.deleteWidget(req.params.id)
    .then(() => {
      return res.status(200).send()
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
module.exports = router
