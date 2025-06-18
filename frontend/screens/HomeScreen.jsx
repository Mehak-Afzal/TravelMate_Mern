import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

const HomeScreen = () => {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const response = await axiosInstance.get('/api/itineraries'); // Make sure this endpoint exists in backend
        setItineraries(response.data);
      } catch (error) {
        console.error('Error fetching itineraries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItineraries();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background Image */}
      <img
        src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg"
        alt="Beautiful Travel Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Content */}
      <div className="relative p-8 z-10">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Welcome to Travel Mate Itineraries
        </h1>
        <h3 className="text-xl text-center text-gray-700 mb-8">
          Discover your next adventure with our curated itineraries
        </h3>

        {loading ? (
          <p className="text-center text-blue-500">Loading itineraries...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {itineraries.map((section, index) => (
              <Link to={`/itinerary/${section.category}`} key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <img src={section.image} alt={section.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h2 className="text-2xl font-bold text-blue-700 mb-2">{section.title}</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-yellow-500">⭐ {section.rating}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
