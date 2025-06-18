// src/screens/LoginScreen.jsx
import axiosInstance from '../api/axiosInstance';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    setError('Please enter both email and password.');
    return;
  }

  try {
    const response = await axiosInstance.post("/api/auth/login", {
      email,
      password,
    });

    console.log("Login successful:", response.data);
    navigate("/home"); // Or wherever you want to go after login
  } catch (err) {
    console.error("Login error:", err);
    setError(err.response?.data?.message || "Invalid credentials");
  }
};


  const handleRegisterRedirect = () => {
    navigate('/register'); // If user clicks "Don't have an account?"
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Background Image */}
      <img
        src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg"
        alt="Beautiful Travel Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Login Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          
          <span className="text-blue-400">Login Page</span>
        </h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-blue-400 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-blue-400 font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-blue-500">
          Don't have an account?{' '}
          <button onClick={handleRegisterRedirect} className="text-blue-700 font-semibold hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
