const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const {
  newAppointmentDocs,
  getAppointmentsDocs,
  getAllAnalysisDocs,
  getAnalysisByIdDocs,
  patientDeleteAppointmentDocs,
  doctorDeleteAppointmentDocs,
} = require('./docs.js')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Clinic Lab API',
      version: '1.0.0',
      description:
        'API used to obtain and manipulate information about patients, doctors, and more. ',
      contact: { name: 'Adriangln11' },
    },
  },
  apis: ['./src/routes/*.js'],
}

const swaggerSpec = swaggerJsDoc(options)
swaggerSpec.paths = {
  ...swaggerSpec.paths,
  ...newAppointmentDocs,
  ...getAppointmentsDocs,
  ...getAllAnalysisDocs,
  ...getAnalysisByIdDocs,
  ...patientDeleteAppointmentDocs,
  ...doctorDeleteAppointmentDocs,
}

const swagger = (app, port) => {
  app.use('/api/docs/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('/api/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
  console.log(
    '📚 Documentation is available at https://clinic-lab-api.onrender.com/api/docs/'
  )
}

module.exports = { swagger }
