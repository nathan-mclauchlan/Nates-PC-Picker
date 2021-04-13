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
  db.saveWidget(req.body)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

module.exports = router
