import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	name: String,
    email: String,
    gender: String,
	contact: Number,
	address: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'address'
		}
	]
})

export default mongoose.model('customer', schema);
