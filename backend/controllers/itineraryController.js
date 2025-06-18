import Itinerary from '../models/Itinerary.js';

export const getItineraries = async (req, res) => {
    console.log('GET /api/itineraries route hit ✅'); 
  try {
    const itineraries = await Itinerary.find();
    res.json(itineraries);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createItinerary = async (req, res) => {
    console.log('POST /api/itineraries route hit 📝');
  try {
    const itinerary = new Itinerary(req.body);
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

export const getItineraryById = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary) return res.status(404).json({ message: 'Not found' });
    res.json(itinerary);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(itinerary);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteItinerary = async (req, res) => {
  try {
    await Itinerary.findByIdAndDelete(req.params.id);
    res.json({ message: 'Itinerary deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
export const getTopRatedItineraries = async (req, res) => {
  try {
    const topRated = await Itinerary.find({ rating: { $gte: 4.5 } });
    res.json(topRated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get itineraries by category
export const getItinerariesByCategory = async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ category: req.params.category });
    res.json(itineraries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get itinerary count by category (aggregation)
export const getCategoryStats = async (req, res) => {
  try {
    const stats = await Itinerary.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } }
    ]);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Sort itineraries by rating (high to low)
export const getItinerariesSortedByRating = async (req, res) => {
  try {
    const sorted = await Itinerary.find().sort({ rating: -1 });
    res.json(sorted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};