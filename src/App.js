
import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/Body/Body';
import Cart from './components/Cart/Cart';

function App() {
  const [data , setdata] = useState([])

  useEffect(()=>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(datas => setdata(datas))
  },[])

  return (
    <div className="App">
      <Body  
      data={data}
      ></Body>
      <Cart></Cart>
    </div>
  );
}

export default App;
