const mysql = require('mysql2')
require('dotenv/config')

const connection = mysql.createConnection({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
  port: process.env.PORT_DB,
})
connection.connect((e) => {
  if (e) return console.log('Error connecting to DB:', e)
  return console.log(`DB connected successfully: ${connection.config.database}`)
})

module.exports = connection
