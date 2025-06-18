import express from 'express';
import {
  getItineraries,
  createItinerary,
  getItineraryById,
  updateItinerary,
  deleteItinerary,
  getTopRatedItineraries,
  getItinerariesByCategory,
  getCategoryStats,
  getItinerariesSortedByRating
} from '../controllers/itineraryController.js';

const router = express.Router();

router.get('/', getItineraries);
router.post('/', createItinerary);

router.get('/top-rated', getTopRatedItineraries);
router.get('/category/:category', getItinerariesByCategory);
router.get('/stats/categories', getCategoryStats);
router.get('/sorted/rating', getItinerariesSortedByRating);

router.get('/:id', getItineraryById);
router.put('/:id', updateItinerary);
router.delete('/:id', deleteItinerary);
export default router;
