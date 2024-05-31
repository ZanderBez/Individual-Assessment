// src/routes/userRoutes.js
import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import PetItem from '../models/PetItems.js';

const router = express.Router();


// Create a new pet item
router.post('/petItems', async (req, res) => {
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
router.get('/petItems', async (req, res) => {
    try {
        const petItems = await PetItem.find();
        res.status(200).json(petItems);
    } catch (err) {
        console.error("Error fetching pet items:", err);
        res.status(500).json({ message: 'Error fetching pet items', error: err.message });
    }
});

// Create a new user
router.post('/register', async (req, res) => {
    console.log("Attempting to save user:", req.body);
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            username: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        console.error("Error in user registration:", err);
        res.status(500).json({ message: 'Error adding user', error: err.message });
    }
});

// User login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({ 
            message: 'Login successful',
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (err) {
        console.error("Error during user login:", err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

export default router;
