const { swagger } = require('./docs/swagger.js')
const app = require('./app')

app
  .get('/', (req, res) => {
    res.json({
      status: 'Success',
      message: 'Lab API',
      docs: 'https://clinic-lab-api.onrender.com/api/docs/',
    })
  })

  //*Health Check route
  .get('/api', (req, res) => {
    return res.json({
      status: 'Success',
      message: 'Hello API',
    })
  })

app.listen(app.get('port'), () => {
  console.log(`Server listening on port: ${app.get('port')}`)
  swagger(app, app.get('port'))

  //! 404 NOT FOUND Middleware
  app.use((req, res, next) => {
    res.status(404).json({
      status: 'Error',
      message: 'Page not Found',
    })
  })
})
