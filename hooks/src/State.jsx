import React, { useState } from 'react'

function State() {

    let [counter,setCounter]= useState(0);
    let [name,setName] = useState('XYZ');

    let increment = ()=>{
     setCounter(counter+1);
    }
    let decrement = ()=>{
        setCounter(counter--);
    }
    
    let updateName = (e)=>{
       setName(e.target.value)
    }
  return (
    <div>
        <h1>USE STATE </h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <p>You clicked {counter} times</p>
        <input type='text' placeholder='Enter your name ' onChange={updateName}></input>
        <p>Your name is {name}</p>
    </div>
  )
}

export default State