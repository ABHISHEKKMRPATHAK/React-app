import React from 'react'

function Navbar({item1,item2,item3,item4,item5}) {
  return (
  <>
  <div className='m-4'>
    <ul className="flex flex-row justify-between m-2 p-2" style={{listStyle:"none"}}>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
        <li>{item4}</li>
        <li>{item5}</li>
    </ul>
  </div>
  </>
  )
}

export default Navbar