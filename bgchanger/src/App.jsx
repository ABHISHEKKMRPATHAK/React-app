import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("red")

  return (
 <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"lavender"}} onClick={()=>{setColor("lavender")}}>lavender</button>
          <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"gray"}} onClick={()=>{setColor("gray")}}>gray</button>
          <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>blue</button>
  </div> 
    </div>
      </div>
  )
}

export default App
