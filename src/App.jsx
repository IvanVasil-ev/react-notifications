import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';

import './App.css';

function App() {
  //
  //  [Documentation]: 'https://fkhadra.github.io/react-toastify/introduction/'
  //

  




  const notifyStyle = (i) => {
    switch (i) {
      case 0:
        return toast('This is your notifies!');
      case 1:
        return toast.info('You can customize this on "App.js"!');
      case 2:
        return toast.success('Alse you can find link to documentation!');
      case 3:
        return toast.warning('Be careful!');
      default:
        return toast.error('Just error ._.');
    }
  };

  const timeOut = (timer, times) => {
    for (let i = 0; i < times; i++) {
      setTimeout(() => {
        notifyStyle(i)
      }, timer * i + 1)
    }
  };

  const notify = () => {
    timeOut(2000, 5);
  }

  return (
    <div className="container">
      <div className="header">
        <span className="title">
          Page with notifies.
        </span>
        <Button
          variant="primary"
          size="lg"
          onClick={notify}
        >
          Notify
        </Button>
      </div>
    </div>
  );
}

export default App;
