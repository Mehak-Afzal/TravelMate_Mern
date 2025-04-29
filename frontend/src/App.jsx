import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../screens/RegisterScreen.jsx"; // Adjust path if needed
import Login from "../screens/LoginScreen.jsx";
import Home from "../screens/HomeScreen.jsx";
import Itinerary from "../screens/ItineraryScreen.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/itinerary/:category" element={<Itinerary />} />
        
      </Routes>
    </Router>
  );
}

export default App;
