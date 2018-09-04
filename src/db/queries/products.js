export const addProduct = (db, data) => db.product.create({
    plantName: data.plantName,
    description: data.description,
    scientificName: data.scientificName,
    discountPercentage: data.discountPercentage,
    light: data.light,
    height: data.height,
    price: data.price,
    uses: data.uses,
    symbol: data.symbol,
    quantity: data.quantity
})

export const getProductList = (db) => db.product.find({})