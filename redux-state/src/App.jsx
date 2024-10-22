import { useState } from 'react'
import './App.css'




function App() {

let count=1;
  const increment = 
  {
    type: 'counter/incremented',
    payload: 'incremented value'
  }

function incrementValue(count,action)
{
if(action.type==='counter/increment'){
  count=count+1;
  console.log(action.payload);
}
}

  return (
    <>
    <h1>State Management</h1>
    <button onClick={incrementValue(count,increment)}>+</button>
    <h2>Counter value : {count}</h2>
    </>
  )
}

export default App
