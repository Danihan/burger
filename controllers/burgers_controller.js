const express = require('express')
const burger = require('../models/burger')

const router = new express.Router()

router.get('/', async (req, res) => {
  const burgers = await burger.selectAll()

  const burgersDevoured = burgers.filter(burger => burger.devoured)
  const burgersNotDevoured = burgers.filter(burger => !burger.devoured)

  res.render('index', { burgersDevoured, burgersNotDevoured })
})

router.post('/devour', async (req, res) => {
  const { id } = req.body

  if (!id) {
    return res.sendStatus(400)
  }

  await burger.updateOne(id, { devoured: true })

  res.redirect('/')
})

router.post('/insert', async (req, res) => {
  let { name } = req.body

  name = name.trim()

  if (!name) {
    return res.sendStatus(400)
  }

  await burger.insertOne({ name, devoured: false })

  res.redirect('/')
})

module.exports = router
