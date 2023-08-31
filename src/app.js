const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const analysisRouter = require('./routes/analysis');
const patientRouter = require('./routes/patient');
const doctorRouter = require('./routes/doctor');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.set('port', process.env.PORT || 3000);

app.disable('x-powered-by');

app.use('/analysis', analysisRouter);
app.use('/patient', patientRouter);
app.use('/doctor', doctorRouter);

module.exports = app;
