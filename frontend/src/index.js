import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, UserRegistration} from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <UserRegistration />
  </React.StrictMode>
);
