import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
 <ul>
    <li  className='list' onClick={<Link to={"#list1"}/>}>homepage</li>
    <li className='list'>App</li>
    <li className='list'>Contact</li>
    <li className='list1'>Item</li>
    </ul>
   </>
  )
}

export default Navbar