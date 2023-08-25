import { fileURLToPath } from 'url'
import path, {dirname} from 'path'


const __filename = fileURLToPath(import.meta.url)
const __dirname1 = dirname(__filename)
const __dirname = path.resolve(__dirname1, '../')

/*
This file contains the directory path of index.js
**/

export default __dirname