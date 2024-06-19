import { db } from '../db/config.mjs'

db.connect()

const CategoriesController = {
  getCategories (req, res) {
    const sql = 'SELECT * FROM categories'

    db.query(sql, (err, result) => {
      if (err) throw err

      res.send('All categories')
      console.log(result)
    })
  },
  getCategoriesForId (req, res) {
    const sql = `SELECT * FROM categories WHERE id_categorie = ${req.params.id_categorie}`

    db.query(sql, (err, result) => {
      if (err) throw err

      res.send('Categorie select for id')
      console.log(result)
    })
  },
  postNewCategorie (req, res) {
    const sql = `INSERT INTO categories SET categoria = '${req.body.categoria}'`

    db.query(sql, (err, result) => {
      if (err) throw err

      res.send('New categorie added')
      console.log(`${result}`)
    })
  },
  updateCategorie (req, res) {
    const sql = `UPDATE categories SET categoria = '${req.body.categoria}' WHERE id_categorie = ${req.params.id_categorie}`

    db.query(sql, (err, result) => {
      if (err) throw err

      res.send('Update categorie')
      console.log(`${result}`)
    })
  }
}

export default CategoriesController
