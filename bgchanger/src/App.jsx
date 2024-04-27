import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("red")

  return (
 <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
<div className="flex flex-wrap justify-center bottom-12 inset-x- px-2"></div>
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"></div>
  </div>
  )
}

export default App
