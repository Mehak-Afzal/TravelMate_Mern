import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import itineraryRoutes from './routes/itineraryRoutes.js';
import mongoose from 'mongoose';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/itineraries', itineraryRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB error:', err));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).send('Something broke!');
});
app.use((req, res) => {
  console.log('Route not found:', req.method, req.url);
  res.status(404).json({ message: 'Route not found' });
});
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
