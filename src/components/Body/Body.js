import React from 'react';
import './Body.css'

const Body = (props) => {
  // console.log(props)
  return (
    <div className='bodyClass'>
      <div>
      <h1>Daily Routine</h1>
      <p>Select today’s Activities</p>
      </div>
      <div className='bodypart'>
      {
        props?.data.map(info=> <Card info={info}
          key={info.id}
          ></Card>)
      }
      </div>
    </div>
  );
};

function Card(props){
// console.log(props.info)
const {name,time,img} = props.info
  return(
    <div className='Maincard'>
      <div className='imgdiv'>
        <img src={img} alt="" />
      </div>
      <h3>{name}</h3>
      <p>Time required :{time}m </p>
      <button>Add to list</button>
    </div>
  )
}


export default Body;