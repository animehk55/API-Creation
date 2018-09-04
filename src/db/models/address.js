import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    fullName: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    State: String,
    pinCode: Number,
    mobileNo: Number,
})

export default mongoose.model('address', schema)
