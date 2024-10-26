import React from 'react'
import Profile from './Profile'

function Field({setShowProfile}) {
  return (
    <div>
        <button className='border border-grey-500 rounded-full m-4 h-10 w-40 border-solid bg-gray-400'
         onClick={
          ()=>setShowProfile(true)
          }>
           Employee Detail 
        </button>
        </div>
  )
}

export default Field