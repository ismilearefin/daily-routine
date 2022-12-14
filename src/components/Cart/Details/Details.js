
import './Details.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = (props) => {

  const showToastMessage = () => {
    toast.success('You have successfully done your activity !', {
        position: toast.POSITION.TOP_CENTER
    });
};



  return (
    <div className='detailsdiv'>
      <h3>Activity Details</h3>
        <div className='Time'>
          <p>Activity time</p>
          <p>{props.total.minute} minute</p>
        </div>
        <div className='Time'>
          <p>Break Time</p>
          <p>{props.data} minute</p>
        </div>
          <div>
            <button className='btn' onClick={showToastMessage}>Activity Completed</button>
            <ToastContainer />
          </div>
    </div>
  );
};

export default Details;