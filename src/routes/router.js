const router = require('express').Router()
const connection = require('../db/db.js')

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

  .get('/listados', (req, res) => {
    console.log(connection)
    //info.send('Estás en el sector de listados - GET');
    const sql = 'SELECT * FROM personas '
    connection.query(sql, (error, resultados) => {
      console.log(resultados)
      if (!resultados) {
        // resultados obtenidos de la base de datos
        return res.json({
          status: 'Failure',
          message: 'Data not found',
        })
      } else {
        res.json({
          status: 'Success',
          message: 'Completed successfully',
          data: resultados,
        })
      }
    })
  })

  .post('/listados', (req, res) => {
    returnres.send('Estás en el sector de listados - POST')
  })

  .get('/consultas/:id', (req, res) => {
    const { id } = req.params
    const sql = `SELECT id,nombre,apellido,edad FROM personas where id = ${id} `
    connection.query(sql, (e, data) => {
      if (e) return console.log(`error: ${e}`)
      if (data.length > 0) {
        // data obtenidos de la base de datos
        return res.json({
          status: 'Success',
          message: 'Completed successfully',
          data,
        })
      } else {
        return res.json({
          status: 'Failure',
          message: 'Data not found',
          data,
        })
      }
    })
  })
  .post('/nueva', (req, res) => {
    const sql = 'INSERT INTO personas SET ?'

    const nuevodato = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      edad: req.body.edad,
    }

    connection.query(sql, nuevodato, (error) => {
      if (error) {
        console.error(error)
        console.log('Error al dar el alta')
        res.sendStatus(400)
      } else {
        res.send('Alta dada correctamente')
        console.log('Alta Ok')
      }
    })
  })

  .delete('/borrar/:nro', (req, res) => {
    const { nro } = req.params
    const sql = `DELETE FROM personas where id = ${nro} `
    connection.query(sql, (error) => {
      if (error) throw error
      res.send('No encontré datos')
    })
  })

  .put('/cambiar/:nro', (req, res) => {
    const { nro } = req.params
    const { nombre, apellido } = req.body
    const sql = `UPDATE personas set nombre = '${nombre}',apellido= '${apellido}'
  where id = ${nro} `

    connection.query(sql, (error) => {
      if (error) throw error
      res.send('Dato modificado correctamente')
    })
  })

  .patch('/cambiar/:nro', (req, res) => {
    res.send('Modificar un Dato - Patch')
  })

module.exports = router
