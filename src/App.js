
import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/Body/Body';
import Cart from './components/Cart/Cart';

function App() {
  const [data , setdata] = useState([])
  const [minute, setminute] = useState(0)

  useEffect(()=>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(datas => setdata(datas))
  },[])
  
  function addToList(min){
    // console.log(min)
    const total = minute + min;
    setminute(total)
  }

  return (
    <div>
      <div className="App">
        <Body  
        data={data}
        addToList={addToList}
        ></Body>
        <Cart 
        minute={minute}
        ></Cart>
      </div>
      
    </div>
  );
}

export default App;
