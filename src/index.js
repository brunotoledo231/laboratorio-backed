const app = require('./app')

app
.get('/', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Lab API',
  })
})

//*Health Check route
.get('/api', (req, res) => {
  return res.json({
    status: 'Success',
    message: 'Hello API',
  })
})

//! Middleware 404 NOT FOUND
app.use((req, res, next) => {
  res.status(404).json({
    status: 'Error',
    message: 'Page not Found',
  })
})

app.listen(
  app.get('port'),
  console.log(`Server listening on port: ${app.get('port')}`)
)
