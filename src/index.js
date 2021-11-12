import React from 'react';
import { render } from 'react-dom';
import { ToastContainer } from 'react-toastify';

import './index.css';
import App from './App';

render(
  <React.StrictMode>
    <App />
    <ToastContainer
      draggable
      pauseOnHover={false}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
