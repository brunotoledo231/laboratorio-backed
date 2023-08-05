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
        res.send('Results not found')
      } else {
        res.json(resultados)
      }
    })
  })

  .post('/listados', (req, res) => {
    res.send('Estás en el sector de listados - POST')
  })

  .get('/consultas/:nro', (req, info) => {
    const { nro } = req.params
    const sql = `SELECT id,nombre,apellido,edad FROM personas where id = ${nro} `
    connection.query(sql, (error, resultados) => {
      if (error) throw error
      if (resultados.length > 0) {
        // resultados obtenidos de la base de datos
        info.json(resultados)
      } else {
        info.send('No encontré datos en la BD')
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
