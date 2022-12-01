import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './routes.js';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Routes />
  </React.StrictMode>
);