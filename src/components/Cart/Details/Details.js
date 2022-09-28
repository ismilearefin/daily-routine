import React from 'react';
import './Details.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = (props) => {

  const showToastMessage = () => {
    toast.success('You have successfully done your activity !', {
        position: toast.POSITION.TOP_RIGHT
    });
};




  // console.log(props)
  return (
    <div className='detailsdiv'>
      <h3>Exercise Details</h3>
        <div className='Time'>
          <p>Exercise time</p>
          <p>{props.total.minute} minute</p>
        </div>
        <div className='Time'>
          <p>Break Time</p>
          <p>{props.time} minute</p>
        </div>
          <div>
            <button className='btn' onClick={showToastMessage}>Activity Completed</button>
            <ToastContainer />
          </div>
    </div>
  );
};

export default Details;