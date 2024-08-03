import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';

function TopBar() {
  return (
    <div className='topbar-container'>
     <div className="topBar-left">
      <span className='logo'>Social</span>
     </div>
     <div className="topbar-right">

     </div>
     <div className="topbar-center"></div>
    <div className='search-bar'> 
      <SearchIcon/>
      <input placeholder='Search Name'/>
    </div>
    </div>
  )
}

export default TopBar