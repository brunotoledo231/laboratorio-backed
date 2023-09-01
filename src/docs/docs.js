const newAppointmentDocs = {
  '/patient/{patient_id}/new': {
    patch: {
      summary: 'Update the date of an appointment',
      tags: ['Patient'],
      parameters: [
        {
          in: 'path',
          name: 'patient_id',
          required: true,
          schema: {
            type: 'integer',
          },
          description: 'Patient ID',
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                newDate: {
                  type: 'string',
                  format: 'date',
                  example: '2023-08-07',
                  description: 'New date appointment',
                },
                analysisId: {
                  type: 'integer',
                  example: 11,
                  description: 'Analysis identifier',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              example: {
                status: 'ok',
                message: 'updated successfully',
                affectedRows: 1,
                data: {
                  analysis_id: 1,
                  appointment_date: '2023-09-09T06:00:00.000Z',
                  appointment_observation: 'Observaciones adicionale',
                  patient_id: 1,
                },
              },
            },
          },
        },
        500: {
          description: 'Server error',
          content: {
            'application/json': {
              example: {
                status: 'error',
                code: 'E12345',
                message: 'Error processing the query',
              },
            },
          },
        },
      },
    },
  },
}
const getAppointmentsDocs = {
  '/patient/{patient_id}/appointments': {
    get: {
      summary: 'Get patient appointments',
      tags: ['Patient'],
      parameters: [
        {
          in: 'path',
          name: 'patient_id',
          required: true,
          schema: {
            type: 'integer',
          },
          description: 'Patient ID',
        },
      ],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              example: {
                status: 'ok',
                message: 'Completed successfully',
                results: 1,
                data: [
                  {
                    appointment_id: 6,
                    analysis_id: 1,
                    appointment_date: '2023-09-09T06:00:00.000Z',
                    appointment_observation: 'Observaciones adicionale',
                    patient_id: 1,
                  },
                ],
              },
            },
          },
        },
        404: {
          description: 'Wrong patient id',
          content: {
            'application/json': {
              example: {
                status: 'error',
                message: 'wrong identifier',
              },
            },
          },
        },
        500: {
          description: 'Server error',
          content: {
            'application/json': {
              example: {
                status: 'error',
                code: 'E12345',
                message: 'error processing the query',
              },
            },
          },
        },
      },
    },
  },
}
const getAllAnalysisDocs = {
  '/analisys/': {
    get: {
      summary: 'Get all analysis documents',
      tags: ['Analysis'],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              example: {
                status: 'ok',
                message: 'Completed successfully',
                results: 2,
                data: [
                  {
                    analysis_type_id: 1,
                    analysis_type_price: 'Urocultivo automatizado',
                    analysis_type_previous_condition:
                      'Recolectar la primera orina de la mañana: realizar previo aseo genital, sacar la muestra del chorro intermedio en un frasco estéril de plástico y de boca ancha',
                  },
                  {
                    analysis_type_id: 2,
                    analysis_type_price: 'Recuento automático de plaquetas',
                    analysis_type_previous_condition:
                      'No fumar ni trasnochar desde 48 antes',
                  },
                  {
                    analysis_type_id: 3,
                    analysis_type_price: 'Microalbuminuria semiautomatizada',
                    analysis_type_previous_condition:
                      '24 horas previas a la recolección de la muestra. recolectar en un recipiente para orina nuevo cualquier miccion de orina matutina el día a presentarse en el laboratorio.',
                  },
                ],
              },
            },
          },
        },
        404: {
          description: 'Analysis not found',
          content: {
            'application/json': {
              example: {
                status: 'error',
                message: 'No information available',
                results: 0,
              },
            },
          },
        },
        500: {
          description: 'Server error',
          content: {
            'application/json': {
              example: {
                status: 'error',
                code: 'E12345',
                message: 'error processing the query',
              },
            },
          },
        },
      },
    },
  },
}
const getAnalysisByIdDocs = {
  '/getAnalysis/{analysis_id}/': {
    get: {
      summary: 'Get analysis by id',
      tags: ['Analysis'],
      parameters: [
        {
          in: 'path',
          name: 'analysis_id',
          required: true,
          schema: {
            type: 'integer',
          },
          description: 'Analysis ID',
        },
      ],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              example: {
                status: 'ok',
                message: 'Completed successfully',
                results: 1,
                data: [
                  {
                    analysis_type_id: 3,
                    analysis_type_price: 'Microalbuminuria semiautomatizada',
                    analysis_type_previous_condition:
                      '24 horas previas a la recolección de la muestra. recolectar en un recipiente para orina nuevo cualquier miccion de orina matutina el día a presentarse en el laboratorio.',
                  },
                ],
              },
            },
          },
        },
        404: {
          description: 'Wrong id',
          content: {
            'application/json': {
              example: {
                status: 'error',
                message: 'Analysis not found',
              },
            },
          },
        },
        500: {
          description: 'Server error',
          content: {
            'application/json': {
              example: {
                status: 'error',
                code: 'E12345',
                message: 'error processing the query',
              },
            },
          },
        },
      },
    },
  },
}
const patientDeleteAppointmentDocs = {
  '/patient/{patient_id}/appointments/{appointment_id}': {
    delete: {
      summary: 'Delete an appointment',
      tags: ['Patient'],
      parameters: [
        {
          in: 'path',
          name: 'patient_id',
          required: true,
          schema: {
            type: 'integer',
          },
          description: 'Patient ID',
        },
        {
          in: 'path',
          name: 'appointment_id',
          required: true,
          schema: {
            type: 'integer',
          },
          description: 'Appointment id to delete',
        },
      ],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              example: {
                status: 'ok',
                message: 'deleted successfully',
                affectedRows: 1,
              },
            },
          },
        },
        500: {
          description: 'Server error',
          content: {
            'application/json': {
              example: {
                status: 'error',
                code: 'E12345',
                message: 'Error processing the query',
              },
            },
          },
        },
      },
    },
  },
}
const doctorDeleteAppointmentDocs = {
  '/doctor/{doctor_id}/appointments/{appointment_id}': {
    delete: {
      summary: 'Delete an appointment',
      tags: ['Doctor'],
      parameters: [
        {
          in: 'path',
          name: 'doctor_id',
          required: true,
          schema: {
            type: 'integer',
          },
          description: 'Doctor identifier',
        },
        {
          in: 'path',
          name: 'appointment_id',
          required: true,
          schema: {
            type: 'integer',
          },
          description: 'Appointment id to delete',
        },
      ],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              example: {
                status: 'ok',
                message: 'Appointment deleted successfully',
                affectedRows: 1,
              },
            },
          },
        },
        500: {
          description: 'Server error',
          content: {
            'application/json': {
              example: {
                status: 'error',
                code: 'E12345',
                message: 'Error processing the query',
              },
            },
          },
        },
      },
    },
  },
}

module.exports = {
  newAppointmentDocs,
  getAppointmentsDocs,
  getAllAnalysisDocs,
  getAnalysisByIdDocs,
  patientDeleteAppointmentDocs,
  doctorDeleteAppointmentDocs,
}
