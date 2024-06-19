import express from 'express'
import CategoriesController from '../controller/CategoriesController.mjs'

const router = express.Router()

router.get('/get-categorias', CategoriesController.getCategories)

router.get('/select-categorie/:id_categorie', CategoriesController.getCategoriesForId)

router.post('/nueva-categoria', CategoriesController.postNewCategorie)

router.put('/actualizar-categorie/:id_categorie', CategoriesController.updateCategorie)

export default router
