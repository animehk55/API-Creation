import express from 'express'
import {productList, addProduct} from '../controllers/product'
import validate from '../middlewares/validate'
import notNull from '../validators/notNullValidator'

const router = express.Router()

router.get('/product', productList)

router.post('/product', validate([notNull]), addProduct)

export default router