import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <audio id="D1#" preload="auto"><source src="/notes/D1#.mp3" type="audio/mp3"></source>
    Your browser does not support the audio element.
    </audio>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Unbounded:wght@200..900&display=swap" 
            rel="stylesheet"></link>
    <App />
  </React.StrictMode>
);
