import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';
import userRoutes from './routes/userRoutes.js';
import PetRoute from './routes/PetRoute.js'

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/users', userRoutes); 
app.use('/api/petItems', PetRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});