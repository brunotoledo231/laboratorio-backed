import { createPool } from 'mysql2/promise'
import config from '../config/config.js'

const pool = createPool({
    host: config.db.dbHost,
    port: config.db.dbPort,
    user: config.db.dbUser,
    password: config.db.dbPassword,
    database: config.db.dbName,
})

export default pool
 