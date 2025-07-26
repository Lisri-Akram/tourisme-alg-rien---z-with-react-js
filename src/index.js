// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <--- THIS IS ESSENTIAL: Import BrowserRouter
import TourismPlatform from './App'; // <--- Your main application component, assuming it's in App.js

// Get the root DOM element where your React app will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application
root.render(
  <React.StrictMode>
    {/* <--- THIS IS THE ABSOLUTELY CRUCIAL PART:
         Your entire React app (TourismPlatform) MUST be wrapped inside BrowserRouter.
         Without this, Routes and Route components inside TourismPlatform will not work. */}
    <BrowserRouter>
      <TourismPlatform />
    </BrowserRouter>
  </React.StrictMode>
);
