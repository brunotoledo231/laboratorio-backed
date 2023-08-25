import express from 'express'
import cors from 'cors'
import __dirname from './utils/projectDirname.js';
import usersRoute from './routes/users.route.js'
import swaggerUiExpress from "swagger-ui-express";
import swaggerSpecs from './utils/swagger.js';
import config from './config/config.js';

const app = express();
const port = config.port

app.use(cors('*'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpecs))

app.use('/api/users', usersRoute)
app.use('/', (req, res) => {
    res.json({
        title: 'Proyecto hospital',
        docs: 'https://institutoweb-hospital-backend.onrender.com/docs'
}
    )
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})