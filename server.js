const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const burgersController = require('./controllers/burgers_controller')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(burgersController)

const httpServer = app.listen(process.env.PORT || 3000, () => {
  const address = httpServer.address()
  console.log(`Server started on ${address.address}:${address.port}`)
})
