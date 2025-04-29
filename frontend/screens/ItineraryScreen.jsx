// src/screens/ItineraryScreen.jsx
import { useParams, Link } from 'react-router-dom';
import React from 'react';

const itineraryData = {
  luxury: {
    title: 'Luxury Itineraries',
    description: 'Experience 5-star resorts, private jets, and luxury safaris.',
    rating: 5,
    image: 'https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/66192c8cfe0b62f0b3765fb4_65b3a4744c8cd6786dd6d8d0_sunset-water-villa-with-pool-outdoor.webp',
  },
  beach: {
    title: 'Beach Itineraries',
    description: 'Relax with island hopping, surfing, and sunbathing.',
    rating: 4,
    image: 'https://media.audleytravel.com/-/media/images/home/inspiration/beach-holidays/hd-hero-images/467183391_byron_bay_australia_1330052_3000x1000.jpg?q=79&w=1920&h=685',
  },
  mountain: {
    title: 'Mountain Itineraries',
    description: 'Hike, ski, and trek across breathtaking mountains.',
    rating: 4.5,
    image: 'https://www.alpinetrailridgeinn.com/wp-content/uploads/sites/23/2020/07/RMNP-main.jpg',
  },
  cultural: {
    title: 'Cultural Itineraries',
    description: 'Explore historic wonders and cultural treasures.',
    rating: 4.8,
    image: 'https://www.welcomenepaltreks.com/uploads/img/nepal-culture-tour-banner.webp',
  },
};

const ItineraryScreen = () => {
  const { category } = useParams();
  const itinerary = itineraryData[category];

  if (!itinerary) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold text-red-500">Itinerary not found!</h2>
        <Link to="/" className="text-blue-500 mt-4 underline text-lg">
          Go Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg')" }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto py-12 px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <Link to="/home" className="text-blue-600 text-lg underline mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-purple-600 mb-6">{itinerary.title}</h1>
          <img 
            src={itinerary.image} 
            alt={itinerary.title} 
            className="w-full h-80 object-cover rounded-md mb-6"
          />
          <p className="text-lg text-gray-700 mb-6">{itinerary.description}</p>

          <div className="flex items-center">
            <span className="text-yellow-400 text-2xl mr-2">
              {'★'.repeat(Math.floor(itinerary.rating))}
              {itinerary.rating % 1 !== 0 && '½'}
            </span>
            <span className="text-gray-600">({itinerary.rating} / 5)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryScreen;
