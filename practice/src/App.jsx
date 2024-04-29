import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [color, setColor] = useState("red")
  const [count,setCount] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count=>count+1);
    },10000);
  })

  return (
    <>
   <h1>Color is set to {color}</h1>
   <button type='button' onClick={()=>setColor("yellow")}>Hello</button>

   <article>
i have rendered {count};
   </article>
   </>
  )
}

export default App
