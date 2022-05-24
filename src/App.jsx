import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
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
    <div className="container-fluid">
      <div className="header">
        <span className="title">
          Click on button bellow
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
