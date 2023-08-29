import express from 'express'
import cors from 'cors'
import __dirname from './utils/projectDirname.js';
import analysisTypeRoute from './routes/analysisType.route.js'
import usersRoute from './routes/users.route.js'
import personsRoute from './routes/persons.route.js'

import swaggerUiExpress from "swagger-ui-express";
import swaggerSpecs from './utils/swagger.js';
import config from './config/config.js';
import { updateAnalysisType } from './controllers/analysisTypeController.js';
import { getUserByEmail, getUserById, updateUser,deleteUserById } from './controllers/userController.js';
import { updatePerson } from './controllers/personController.js';


const app = express();
const port = config.port

app.use(cors('*'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpecs))

//userendpoints
app.use('/api/users', usersRoute);
app.use('/api/users/id/:id', getUserById);
app.use('/api/users/email/:email',getUserByEmail)
app.use('/api/users/email/:email',updateUser)
app.use('/api/users/delete/id/:id',deleteUserById)
app.use('/api/users/inverseDelete/id/:id',deleteUserById)

app.use('/api/persons', personsRoute);
app.use('/api/persons/id/:id',updatePerson)


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