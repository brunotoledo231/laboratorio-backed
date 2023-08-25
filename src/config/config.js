import dotenv from 'dotenv'
import {Command} from 'commander'
const program = new Command()
program.option('--mode <mode>', 'deployment mode', 'production')
program.parse()

const environment = program.opts().mode

dotenv.config({
    path: environment == "test" ? './.env.test' : environment == 'dev' ? './.env.dev' : './.env.production'
})

export default {
    port: process.env.PORT,
    db: {
        dbHost: process.env.DB_HOST,
        dbPort: process.env.DB_PORT,
        dbUser: process.env.DB_USER,
        dbPassword: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME,
    }


}