import React from 'react'
import "./topbar.css"
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat'

function TopBar() {
  return (
    <div className='topbar-container'>
     <div className="topBar-left">
      <span className='logo'>Social</span>
     </div>
     <div className="topbar-center"></div>
    <div className='search-bar'> 
      <SearchIcon/>
      <input placeholder='Search Name' className='search-input'/>
    </div>

    <div className="topbar-right">
       <div className="topbar-links">
         <span className="topbar-link">HomePage</span>
           <span className="topbar-link">Timeline</span>
       </div>

<div className="topbar-Icons">
  <div className="topbar-icon-items">
     <PersonIcon/>
      <span className="topbar-icon-badge">1</span>
  </div>
</div>

<div className="topbar-Icons">
  <div className="topbar-icon-items">
     <NotificationsIcon/>
      <span className="topbar-icon-badge">3</span>
  </div>
</div>

<div className="topbar-Icons">
  <div className="topbar-icon-items">
     <ChatIcon/>
      <span className="topbar-icon-badge">7</span>
  </div>
</div>
    </div>
    </div>
  )
}

export default TopBar