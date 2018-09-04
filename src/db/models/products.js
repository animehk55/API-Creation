import mongoose from 'mongoose'

const schema = mongoose.Schema({
  plantName: String,
  scientificName: String,
  light: String,
  height: String,
  price: Number,
  discountPercentage: Number,
  quantity: Number,
  description: String,
  symbol: String,
  uses: String,
  comments: [
    {
    type : mongoose.Schema.Types.ObjectId,
    ref : "comments"
    }
]
})

export default mongoose.model('product', schema)