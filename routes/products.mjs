import express from 'express'
import { db } from '../db/config.mjs'

const router = express.Router()
db.connect()

router.post('/nuevo-producto', (req, res) => {
  const product = {
    nombre: req.body.nombre,
    precio: req.body.precio,
    id_categorie: req.body.id_categorie
  }

  const sql = 'INSERT INTO products SET ?'

  db.query(sql, product, (err, result) => {
    if (err) throw err

    res.send('New product added')
    console.log(`${result}`)
  })
})

router.put('/actualizar-producto/:id', (req, res) => {
  const sql = `UPDATE products SET nombre = '${req.body.nombre}', precio = ${req.body.precio}, id_categorie = ${req.body.id_categorie} WHERE id = ${req.params.id}`

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('Update product')
    console.log(`${result}`)
  })
})

router.delete('/delete-product/:id', (req, res) => {
  const sql = `DELETE FROM products WHERE id = ${req.params.id}`

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('Delete product')
    console.log(`${result}`)
  })
})

router.get('/get-products', (req, res) => {
  const sql = 'SELECT * FROM products'

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('All products')
    console.log(result)
  })
})

router.get('/get-products-categories', (req, res) => {
  const sql = 'SELECT p.id AS Id_producto,  p.nombre AS Nombre_Producto, p.precio AS Precio_Producto, c.categoria AS Categorias FROM products p JOIN categories c ON p.id_categorie = c.id_categorie'

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('Get products and categories')
    console.log(result)
  })
})

router.get('/select-product/:id', (req, res) => {
  const sql = `SELECT * FROM products WHERE id = ${req.params.id}`

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('Product select for id')
    console.log(result)
  })
})

router.get('/get-product-for-name/', (req, res) => {
  const sql = `SELECT * FROM products  WHERE nombre = '${req.body.nombre}'`

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('Get product for name')
    console.log(result)
  })
})

export default router
