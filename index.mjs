import express from 'express'
import { db } from './db/config.mjs'

const app = express()
db.connect()

app.use(express.json())

app.post('/nuevo-producto', (req, res) => {
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

app.post('/nueva-categoria', (req, res) => {
  const sql = `INSERT INTO categories SET categoria = '${req.body.categoria}'`

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('New categorie added')
    console.log(`${result}`)
  })
})

app.put('/actualizar-producto/:id', (req, res) => {
  const sql = `UPDATE products SET nombre = '${req.body.nombre}', precio = ${req.body.precio}, id_categorie = ${req.body.id_categorie} WHERE id = ${req.params.id}`

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('Update product')
    console.log(`${result}`)
  })
})

app.put('/actualizar-categorie/:id_categorie', (req, res) => {
  const sql = `UPDATE categories SET categoria = '${req.body.categoria}' WHERE id_categorie = ${req.params.id_categorie}`

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('Update categorie')
    console.log(`${result}`)
  })
})

app.delete('/delete-product/:id', (req, res) => {
  const sql = `DELETE FROM products WHERE id = ${req.params.id}`

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('Delete product')
    console.log(`${result}`)
  })
})

/* Insert */

app.get('/get-products', (req, res) => {
  const sql = 'SELECT * FROM products'

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('All products')
    console.log(result)
  })
})

app.get('/get-categorias', (req, res) => {
  const sql = 'SELECT * FROM categories'

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('All categories')
    console.log(result)
  })
})

app.get('/get-products-categories', (req, res) => {
  const sql = 'SELECT p.id AS Id_producto,  p.nombre AS Nombre_Producto, p.precio AS Precio_Producto, c.categoria AS Categorias FROM products p JOIN categories c ON p.id_categorie = c.id_categorie'

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('Get products and categories')
    console.log(result)
  })
})

app.get('/select-product/:id', (req, res) => {
  const sql = `SELECT * FROM products WHERE id = ${req.params.id}`

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('Product select for id')
    console.log(result)
  })
})

app.get('/select-categorie/:id_categorie', (req, res) => {
  const sql = `SELECT * FROM categories WHERE id_categorie = ${req.params.id_categorie}`

  db.query(sql, (err, result) => {
    if (err) throw err

    res.send('Categorie select for id')
    console.log(result)
  })
})

app.listen(3000, () => console.log('locahost://3000'))
