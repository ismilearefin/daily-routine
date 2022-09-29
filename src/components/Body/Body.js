import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Body.css'




const Body = (props) => {

  return (
    <div className='bodyClass'>
      <div className='heading'>
        <h1><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Daily-Routine</h1>
        <p>Select today’s Activities</p>
      </div>
      <div className='bodypart'>
      {
        props?.data.map(info=> <Card 
          info={info} 
          btn={props.addToList}
          key={info.id}
          ></Card>)
      }
      </div>
    </div>
  );
};

function Card(props){

const {name,time,img} = props.info  //Props Destructuring..
  return(
    <div className='Maincard'>
      <div className='imgdiv'>
        <img src={img} alt="" />
      </div>
      <div className='infobox'>
      <h3>{name}</h3>
      <p>Time required : {time}m </p>
      <button onClick={()=>props.btn(time)}>Add to list</button>
      </div>
    </div>
  )
}


export default Body;