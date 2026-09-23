import React, { useState } from 'react'


const App = () => {
  const [num, setnum] = useState({user:"eshrak",age:21});
  const btnclicked = () => {
    const newnum = {...num};
    newnum.user = "Aman";
    console.log(newnum);
    setnum(newnum);
  }
 
    
  
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnclicked}>click me </button>
    </div>
  )
}

export default App


