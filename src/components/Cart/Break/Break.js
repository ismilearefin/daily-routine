import React from 'react';
import './Break.css'

const Break = () => {
  return (
    <div className='Breakdiv'>
      <h2>Add A Break</h2>
      <div className='breakSec'>
        <a href="/sec">10<small>m</small></a>
        <a href="/sec">20<small>m</small></a>
        <a href="/sec">30<small>m</small></a>
        <a href="/sec">40<small>m</small></a>
        <a href="/sec">50<small>m</small></a>
      </div>
    </div>
  );
};

export default Break;