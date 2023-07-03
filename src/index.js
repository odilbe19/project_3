import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OpenMovie from './pages/open_movie/open_movie';
import Home from './pages/home/Home';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);

