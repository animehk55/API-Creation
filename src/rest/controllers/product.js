import db from '../../db'
import * as productQueries from '../../db/queries/products'

export const productList = async(req, res) => {

    const list = await productQueries.getProductList(db)
    res.json({message: 'Product list displayed successfully', List: list})
}

