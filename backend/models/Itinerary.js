import mongoose from 'mongoose';

const itinerarySchema = new mongoose.Schema({
  title: { type: String },
  category: { type: String },
  items: [String],
  image: { type: String },
  rating: { type: Number },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Itinerary', itinerarySchema);
