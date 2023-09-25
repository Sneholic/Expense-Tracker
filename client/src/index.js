import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assuming index.css is in the same directory as index.js
import App from './App'; // Adjust the path to App.js as needed
import reportWebVitals from './reportWebVitals'; // Adjust the path to reportWebVitals.js as needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
