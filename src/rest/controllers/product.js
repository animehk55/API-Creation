import db from '../../db'
import * as productQueries from '../../db/queries/products'

export const productList = async(req, res) => {

    const list = await productQueries.getProductList(db)
    res.json({message: 'Product list displayed successfully', List: list})
}

export const addProduct = async(req, res) => {
    const {plantName, scientificName, light, height, discountPercentage, price, uses, quantity, symbol, description} = req.body

    const data = await productQueries.addProduct(db, req.body)
    
    res.json({message: 'Product added successfully'})
}