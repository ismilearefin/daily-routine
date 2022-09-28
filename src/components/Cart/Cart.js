import React from 'react';
import Break from './Break/Break';
import './Cart.css'
import Details from './Details/Details';
import Myinfo from './MyInfo/Myinfo';

const Cart = (props) => {
  // console.log(props)
  return (
    <div className='CartCss'>
      <Myinfo></Myinfo>
      <Break></Break>
      <Details total={props}></Details>
    </div>
  );
};

export default Cart;