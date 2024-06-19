import express from 'express'
import ProductController from '../controller/ProductsControllers.mjs'

const router = express.Router()

router.get('/get-products', ProductController.getProduct)

router.post('/nuevo-producto', ProductController.getNewProduct)

router.put('/actualizar-producto/:id', ProductController.updateProduct)

router.delete('/delete-product/:id', ProductController.deleteProducts)

router.get('/get-products-categories', ProductController.getProductDescendingOrder)

router.get('/select-product/:id', ProductController.getProductsForId)

router.get('/get-product-for-name/', ProductController.getProductsForId)

router.get('/descending-order', ProductController.getProductDescendingOrder)

export default router
