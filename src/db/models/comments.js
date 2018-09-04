import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    text : String,
    author : String
})

export default mongoose.model('comments',schema)