import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import './index.css'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
   <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
    </div>
  )
}

export default App
