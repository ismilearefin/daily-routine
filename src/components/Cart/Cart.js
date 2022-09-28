
import { useEffect, useState } from 'react';
import Break from './Break/Break';
import './Cart.css'
import Details from './Details/Details';
import Myinfo from './MyInfo/Myinfo';

const Cart = (props) => {
  // console.log(props)
  const [breakTime, setbreakTime] = useState([])
  let [time, settime] = useState(0)

  useEffect(()=>{
    fetch('time.json')
    .then(res => res.json())
    .then(data=> setbreakTime(data))
  },[])
  // console.log(breakTime)
  
  function btnBreak(times){
    const Y = 0
    const totalBreak = Y + times
    settime(totalBreak)
  }
  

  return (
    <div className='CartCss'>
      <Myinfo></Myinfo>
      <Break
      breakTime={breakTime}
      btnBreak={btnBreak}
      ></Break>
      <Details 
      total={props}
      time={time}
      ></Details>
    </div>
  );
};

export default Cart;