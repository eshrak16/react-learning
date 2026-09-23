import React, { useState } from 'react'
import "./App.css";
const App = () => {
  const [num, setnum] = useState(0)
  function increases(){
    setnum(num +1);
  }

  function decreases(){
    setnum(num-1);
  }

  function increase5(){
    setnum(num+5);
  }
  return (
    <div className='counter'>
      <h1>{num}</h1>
      <div className="buttons">
        <button onClick={increases}>increase</button>
        <button onClick={decreases}>decrease</button>
        <button onClick={increase5}>increase by 5</button>
      </div>
    </div>
  )
}

export default App