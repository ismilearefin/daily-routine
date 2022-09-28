
import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/Body/Body';
import Cart from './components/Cart/Cart';

function App() {
  const [data , setdata] = useState([])
  // const [minute, setminute] = useState('')

  useEffect(()=>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(datas => setdata(datas))
  },[])
  
  function addToList(min){
    console.log(min)
  }

  return (
    <div className="App">
      <Body  
      data={data}
      addToList={addToList}
      ></Body>
      <Cart></Cart>
    </div>
  );
}

export default App;
