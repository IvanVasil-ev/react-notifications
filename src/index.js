import React from 'react';
import { render } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { App } from './App';
import './index.css';

render(
  <React.StrictMode>
    <App />
    <ToastContainer
      draggable
      pauseOnHover={false}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
