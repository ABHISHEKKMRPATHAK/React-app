import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Field from './components/Field'

function App() {
  const [showProfile, setShowProfile] = useState(false)

  return (
    <>
      <Navbar item1={"Home"} item2={"Profile"} item3={"Contact"} item4={"Contact Us"} item5={"Resume"}/>
      <Routes>
      <Route path="/field" element={<Field setShowProfile={()=>setShowProfile(true)}/>}/>
      {showProfile?<Profile name={"Akash"} dept={"App"} doj={"12-12-2021"}/>:""}
      </Routes>
    </>
  )
}

export default App
