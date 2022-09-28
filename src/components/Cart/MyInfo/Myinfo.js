import React from 'react';
import './Myinfo.css'

const Myinfo = () => {
  return (
    <div>
      <div className='info'>
        <div>
          <img src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" alt="" />
        </div>
        <div>
          <h3>Ismile Arefin Fahad</h3>
          <p> Web Developer</p>
        </div>
      </div>
      <div className='aboutMe'>
        <div>
          <h3>75<small>kg</small></h3>
          <p>Weight</p>
        </div>
        <div>
          <h3>5.9</h3>
          <p>Height</p>
        </div>
        <div>
          <h3>24<small>yrs</small></h3>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default Myinfo;