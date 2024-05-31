import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PetItemSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, { collection: 'petItems' });

const PetItem = model('PetItem', PetItemSchema);
export default PetItem;
