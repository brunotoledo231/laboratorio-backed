const router = require('express').Router()
const { getAnalysis } = require('../controllers/controller')
router
  .get('/', (req, res) => {
    res.json({
      status: 'Success',
      message: 'Lab API',
    })
  })
  .get('/api', (req, res) => {
    return res.json({
      status: 'Success',
      message: 'Hello API',
    })
  })
  .get('/getAllAnalysis/', getAnalysis)

// .get('/listados', (req, res) => {
//   console.log(connection)
//   //info.send('Estás en el sector de listados - GET');
//   const sql = 'SELECT * FROM personas '
//   connection.query(sql, (error, resultados) => {
//     console.log(resultados)
//     if (!resultados) {
//       // resultados obtenidos de la base de datos
//       return res.json({
//         status: 'Failure',
//         message: 'Data not found',
//       })
//     } else {
//       res.json({
//         status: 'Success',
//         message: 'Completed successfully',
//         data: resultados,
//       })
//     }
//   })
// })

// .get('/consultas/:id', (req, res) => {
//   const { id } = req.params
//   const sql = `SELECT id,nombre,apellido,edad FROM personas where id = ${id} `
//   connection.query(sql, (e, data) => {
//     if (e) return console.log(`error: ${e}`)
//     if (data.length > 0) {
//       // data obtenidos de la base de datos
//       return res.json({
//         status: 'Success',
//         message: 'Completed successfully',
//         data,
//       })
//     } else {
//       return res.json({
//         status: 'Failure',
//         message: 'Data not found',
//         data,
//       })
//     }
//   })
// })

// .put('/cambiar/:nro', (req, res) => {
//   const { nro } = req.params
//   const { nombre, apellido } = req.body
//   const sql = `UPDATE personas set nombre = '${nombre}',apellido= '${apellido}'
// where id = ${nro} `

//   connection.query(sql, (error) => {
//     if (error) throw error
//     res.send('Dato modificado correctamente')
//   })
// })

module.exports = router
