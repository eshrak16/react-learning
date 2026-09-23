import React from 'react'

const App = () => {
  
  return (
    <div><input type="text" placeholder='enter your inout' onChange={function input(elem){
      console.log(elem.target.value);
    }} /></div>
  )
}

export default App