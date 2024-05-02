import { useState } from 'react'
import Header from './componenents/header/header'
import Footer from './componenents/footer/footer'
import Home from './componenents/home/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
       <Home / >
        <Footer />
    </>
 
  )
}

export default App
