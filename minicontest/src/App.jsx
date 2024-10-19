import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider>
  <Routes>
   <Route path="/" element={<Navbar/>}/>
   <Route path="/profile" element={<Profile/>}/>
  </Routes>
    </UserContextProvider>
  
    </>
  )
}

export default App
