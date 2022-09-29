import { useEffect, useState } from 'react';
import Break from './Break/Break';
import './Cart.css'
import Details from './Details/Details';
import Myinfo from './MyInfo/Myinfo';

const Cart = (props) => {
  const [breakTime, setbreakTime] = useState([]) 
  let [time, settime] = useState(0)
  let [data, setdata] = useState([])

// get data from time data JSON (Break Time)
  useEffect(()=>{
    fetch('time.json')
    .then(res => res.json())
    .then(data=> setbreakTime(data))
  },[])
  
  // set data in local storage & break time calculation
  function btnBreak(times){
    const Y = 0
    const totalBreak = Y + times
    settime(totalBreak);
    localStorage.setItem('min', JSON.stringify(totalBreak)); /////////

  }
  
  // get data from local storage
  useEffect(()=>{
    const showmin =  localStorage.getItem('min');
    setdata(JSON.parse(showmin))
  },[time])


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
        data = {data}
      ></Details>
    </div>
  );
};

export default Cart;