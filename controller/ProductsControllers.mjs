import { db } from '../db/config.mjs'

db.connect()

const ProductController = {
  getProduct (req, res) {
    const sql = 'SELECT * FROM products'

    db.query(sql, (err, result) => {
      if (err) throw err

      res.send('All products')
      console.log(result)
    })
  },
  getNewProduct (req, res) {
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
  },
  postProductsAndCategories (req, res) {
    const sql = 'SELECT p.id AS Id_producto,  p.nombre AS Nombre_Producto, p.precio AS Precio_Producto, c.categoria AS Categorias FROM products p JOIN categories c ON p.id_categorie = c.id_categorie'

    db.query(sql, (err, result) => {
      if (err) throw err

      res.send('Get products and categories')
      console.log(result)
    })
  },
  getProductsForId (req, res) {
    const sql = `SELECT * FROM products WHERE id = ${req.params.id}`

    db.query(sql, (err, result) => {
      if (err) throw err

      res.send('Product select for id')
      console.log(result)
    })
  },
  getProductForName (req, res) {
    const sql = `SELECT * FROM products  WHERE nombre = '${req.body.nombre}'`

    db.query(sql, (err, result) => {
      if (err) throw err

      res.send('Get product for name')
      console.log(result)
    })
  },
  getProductDescendingOrder (req, res) {
    const sql = 'SELECT * FROM products ORDER BY nombre DESC'

    db.query(sql, (err, result) => {
      if (err) throw err

      res.send('Products order desc')
      console.log(result)
    })
  },
  updateProduct (req, res) {
    const sql = `UPDATE products SET nombre = '${req.body.nombre}', precio = ${req.body.precio}, id_categorie = ${req.body.id_categorie} WHERE id = ${req.params.id}`

    db.query(sql, (err, result) => {
      if (err) throw err

      res.send('Update product')
      console.log(`${result}`)
    })
  },
  deleteProducts (req, res) {
    const sql = 'SELECT * FROM products'

    db.query(sql, (err, result) => {
      if (err) throw err

      res.send('All products')
      console.log(result)
    })
  }
}

export default ProductController
