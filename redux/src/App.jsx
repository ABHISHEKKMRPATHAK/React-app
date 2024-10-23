import { useState } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Field from './components/Field'

function App() {
  const [showProfile, setShowProfile] = useState(false)

  return (
    <>
      <Navbar item1={"Home"} item2={"Profile"} item3={"Contact"} item4={"Contact Us"} item5={"Resume"}/>
      {showProfile?<Profile/>:<Field setShowProfile={()=>setShowProfile(true)}/>}
    </>
  )
}

export default App
