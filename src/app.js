const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const analysisRouter = require('./routes/analysis')
const patientRouter = require('./routes/patient')

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.set('port', process.env.PORT || 3000)

app.disable('x-powered-by')

app.use('/getAnalysis', analysisRouter)
app.use('/patient', patientRouter)

module.exports = app
