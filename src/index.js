import express from 'express'
import cors from 'cors'
import __dirname from './utils/projectDirname.js';
import analysisTypeRoute from './routes/analysisType.route.js'
import usersRoute from './routes/users.route.js'
import personsRoute from './routes/persons.route.js'
import medicalCoverageRoute from './routes/medicalCoverage.route.js'
import swaggerUiExpress from "swagger-ui-express";
import swaggerSpecs from './utils/swagger.js';
import config from './config/config.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const port = config.port

app.use(cors('*'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//doc route
app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpecs))

//routes
app.use('/api/users', usersRoute);
app.use('/api/persons', personsRoute);
app.use('/api/medicalcoverages',medicalCoverageRoute);
app.use('/api/analysisType',analysisTypeRoute)


//api landing
app.use('/', (req, res) => {
    res.json({
        title: 'Proyecto hospital',
        docs: 'https://institutoweb-hospital-backend.onrender.com/docs'
}
    )
})

// error middleware
app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})