import React from 'react';
import './Details.css'

const Details = (props) => {
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
          <button>Activity Completed</button>
        </div>
    </div>
  );
};

export default Details;