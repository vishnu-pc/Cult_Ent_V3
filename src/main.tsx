import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { preloadCriticalImages, preloadPriorityImages } from './utils/imagePreloader';

// Preload critical images before app starts
preloadCriticalImages().then(() => {
  // Start preloading priority images after critical ones
  preloadPriorityImages();
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
