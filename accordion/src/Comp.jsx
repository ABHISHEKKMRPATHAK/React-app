import React, { useState } from 'react'
import './app.css'

function Comp(props) {
    const [unhide,setHide] = useState('unhide')
  return (
    <div className='container'>
        <span className='accord-title'>
            <h2>Accord</h2>
        <button onClick={()=>{
     if(unhide=='unhide'){
        setHide("active")
     }
     else setHide("unhide")
     }}>+</button>
        </span>
        <div className='text' > 
            <p className={unhide=="unhide"?"":"active"}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
        </div>
    </div>
  )
}

export default Comp