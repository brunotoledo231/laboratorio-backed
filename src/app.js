const express = require('express')
const cors = require('cors')
const router = require('./routes/router.js')

const app = express()
app.use(cors())
app.use(express.json())
app.set('port', process.env.PORT || 3000)

app.use('/', router)

module.exports = app
