import React from 'react';
import Break from './Break/Break';
import './Cart.css'
import Myinfo from './MyInfo/Myinfo';

const Cart = () => {
  return (
    <div className='CartCss'>
      <Myinfo></Myinfo>
      <Break></Break>
    </div>
  );
};

export default Cart;