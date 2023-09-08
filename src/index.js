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
import { updateAnalysisType } from './controllers/analysisTypeController.js';
import { getUserByEmail, getUserById, updateUser,deleteUserById } from './controllers/userController.js';
import { getAllPersons, updatePerson } from './controllers/personController.js';
import { getAllMedicalCoverage,getMedicalCoverageByName,getMedicalCoverageById } from './controllers/medicalCoverageController.js';


const app = express();
const port = config.port

app.use(cors('*'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpecs))

//userendpoints
app.use('/api/users', usersRoute);


// app.use('/api/users/id/:id', getUserById);
// app.use('/api/users/email/:email',getUserByEmail)
// app.use('/api/users/email/:email',updateUser)//se cambio la ruta de put a patch
// app.use('/api/users/delete/id/:id',deleteUserById)
// app.use('/api/users/inverseDelete/id/:id',deleteUserById)

app.use('/api/persons', personsRoute);
app.use('/api/persons/id/:id',updatePerson)
app.use('api/persons',getAllPersons)

//medical coverages

app.use('/api/medicalcoverages',medicalCoverageRoute);
app.use('/api/medicalcoverages',getAllMedicalCoverage);
app.use('/api/medicalcoverages/id/:id',getMedicalCoverageById)
app.use('/api/medicalcoverages/name/:name',getMedicalCoverageByName)


//analysisTypeEndpoints
app.use('/api/analysisType',analysisTypeRoute)
app.put('/api/analysisType/:id', updateAnalysisType);



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