const app = require('./app')
require('./db/db.js')

app.listen(
  app.get('port'),
  console.log(`Server listening on port: ${app.get('port')}`)
)
