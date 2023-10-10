import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';

function App() {
  const [is,setIs] =useState(false);
  const handelOpen = () => {
    setIs(e =>!e);
  }
  return (
    <div className="App">
      <button onClick={handelOpen}
      style={{position:"absolute",top:"10px",right:"30px"}}>
        {is ? 'close' : 'open'}
      </button>
      <Navbar isOpen={is}/>
    </div>
  );
}

export default App;
