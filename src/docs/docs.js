const newAppointmentDocs = {
  '/patient/{patient_id}/new-appointment': {
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
                date: {
                  type: 'string',
                  format: 'date',
                  example: '2023-08-07',
                  description: 'New date appointment',
                },
                analysisName: {
                  type: 'string',
                  example: 'Análisis de muestra',
                  description: 'Analysis name',
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
                message: '1 rows affected',
                result: [
                  {
                    analysis_id: 123,
                    patient_id: 456,
                    analysis_name: 'Análisis de muestra',
                    analysis_date: '2023-08-07T00:00:00.000Z',
                  },
                ],
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
                results: 2,
                data: [
                  {
                    analysis_id: 123,
                    patient_id: 456,
                    analysis_name: 'Análisis de muestra',
                    analysis_date: '2023-08-07T00:00:00.000Z',
                  },
                  {
                    analysis_id: 124,
                    patient_id: 456,
                    analysis_name: 'Otro análisis',
                    analysis_date: '2023-08-08T00:00:00.000Z',
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
                message: 'Patient not found',
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
  '/getAnalysis/': {
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
                    analysis_id: 123,
                    analysis_name: 'Análisis 1',
                    analysis_type_id: 1,
                    analysis_material: 'Material 1',
                    price: 50,
                  },
                  {
                    analysis_id: 124,
                    analysis_name: 'Análisis 2',
                    analysis_type_id: 2,
                    analysis_material: 'Material 2',
                    price: 75,
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
                    analysis_id: 123,
                    analysis_name: 'Análisis 1',
                    analysis_type_id: 1,
                    analysis_material: 'Material 1',
                    price: 50,
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

module.exports = {
  newAppointmentDocs,
  getAppointmentsDocs,
  getAllAnalysisDocs,
  getAnalysisByIdDocs,
}
