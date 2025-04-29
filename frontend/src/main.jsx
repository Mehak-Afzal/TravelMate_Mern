import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're importing from 'react-dom/client'
import App from './App'; // Make sure the path to App is correct
import './index.css'; // Tailwind styles

// React 18 way of rendering
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);