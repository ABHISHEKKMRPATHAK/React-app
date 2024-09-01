import React, { useRef } from 'react'

function Ref() {
    const inputRef = useRef("");
  return (
    <>
    <h1>USE REF</h1>
    <input placeholder='Enter name' type='text' ref={inputRef}></input>
    <button onClick={()=>{console.log(inputRef.current.value)}}>Reset</button>
    </>
  )
}

export default Ref