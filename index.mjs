import express from 'express'
import { db } from './db/config.mjs'
import products from './routes/products.mjs'
import categories from './routes/categories.mjs'

const app = express()
db.connect()

app.use(express.json())
app.use('/products', products)
app.use('/categories', categories)

app.listen(3000, () => console.log('locahost://3000'))
