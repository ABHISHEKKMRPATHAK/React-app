import React from 'react'

function Profile({name,dept,doj}) {
  return (
    <div>
       <h1 className='w-5 text-center'>Profile</h1>
       <li>Name :{name}</li>
       <li>Department :{dept}</li>
       <li>Date Of Joining: {doj}</li>
    </div>
    
  )
}

export default Profile