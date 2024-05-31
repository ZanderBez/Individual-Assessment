import express from 'express';
import PetItem from '../models/PetItems.js';

const router = express.Router();


// Create a new pet item
router.post('/', async (req, res) => {
    console.log("Attempting to save pet item:", req.body);
    try {
        const newPetItem = new PetItem({
            image: req.body.image,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        });
        const savedPetItem = await newPetItem.save();
        res.status(201).json(savedPetItem);
    } catch (err) {
        console.error("Error adding pet item:", err);
        res.status(500).json({ message: 'Error adding pet item', error: err.message });
    }
});

// Fetch all pet items
router.get('/', async (req, res) => {
    try {
        const petItems = await PetItem.find();
        res.status(200).json(petItems);
    } catch (err) {
        console.error("Error fetching pet items:", err);
        res.status(500).json({ message: 'Error fetching pet items', error: err.message });
    }
});

// Delete a pet item
router.delete('/:id', async (req, res) => {
    try {
        const deletedPetItem = await PetItem.findByIdAndDelete(req.params.id);
        if (!deletedPetItem) {
            return res.status(404).json({ message: 'Pet item not found' });
        }
        res.status(200).json({ message: 'Pet item deleted successfully' });
    } catch (err) {
        console.error("Error deleting pet item:", err);
        res.status(500).json({ message: 'Error deleting pet item', error: err.message });
    }
});

export default router;
