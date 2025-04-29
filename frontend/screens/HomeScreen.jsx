import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const HomeScreen = () => {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    // Simulate fetching itineraries from a server
    const fetchItineraries = async () => {
      const data = [
        {
          category: 'luxury',
          title: 'Luxury Itineraries',
          items: [
            '5-Star Resort in Maldives',
            'Private Jet Tour of Europe',
            'Luxury Safari in Kenya',
          ],
          image: 'https://cdn.prod.website-files.com/607e99bffc9a6042b332722c/66192c8cfe0b62f0b3765fb4_65b3a4744c8cd6786dd6d8d0_sunset-water-villa-with-pool-outdoor.webp',
          rating: 5,
        },
        {
          category: 'beach',
          title: 'Beach Itineraries',
          items: [
            'Island Hopping in Thailand',
            'Surfing in Bali',
            'Sunbathing in the Bahamas',
          ],
          image: 'https://media.audleytravel.com/-/media/images/home/inspiration/beach-holidays/hd-hero-images/467183391_byron_bay_australia_1330052_3000x1000.jpg?q=79&w=1920&h=685',
          rating: 4,
        },
        {
          category: 'mountain',
          title: 'Mountain Itineraries',
          items: [
            'Hiking the Swiss Alps',
            'Skiing in Aspen',
            'Trekking in the Himalayas',
          ],
          image: 'https://www.alpinetrailridgeinn.com/wp-content/uploads/sites/23/2020/07/RMNP-main.jpg',
          rating: 4.5,
        },
        {
          category: 'cultural',
          title: 'Cultural Itineraries',
          items: [
            'Exploring Ancient Rome',
            'Visiting Kyoto Temples',
            'Touring Egyptian Pyramids',
          ],
          image: 'https://www.welcomenepaltreks.com/uploads/img/nepal-culture-tour-banner.webp',
          rating: 4.8,
        },
      ];
      // Set data after 1 second (simulate delay)
      setTimeout(() => {
        setItineraries(data);
      }, 1000);
    };

    fetchItineraries();
  }, []); // Empty dependency array = runs once when component mounts

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

        {itineraries.length === 0 ? (
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
