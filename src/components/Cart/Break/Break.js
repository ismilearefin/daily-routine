import React from 'react';
import './Break.css'

const Break = (props) => {
  // console.log(props)
  // const breaks=[10,20,30,40,50];
  return (
    <div >
      <h2>Add A Break</h2>
      <div className='Breakdiv'>
      {
        props.breakTime.map(min=> <BreakSec 
          min={min}
          key={min.id}
          button={props.btnBreak}
        ></BreakSec>)
      }
      </div>
      
    </div>
  );
};
function BreakSec(props){
  // console.log(props.button)
  return(
    <div className='breakSec'>
        <a onClick={()=>props.button(props.min.time)} href="/sec">{props.min.time}<small>m</small></a>
    </div>
  )
}

export default Break;