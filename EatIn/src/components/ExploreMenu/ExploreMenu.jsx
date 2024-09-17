import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id = 'explore-menu'>
       <h1>Explore our menus</h1>
       <p className='explore-menu-text'>Choose items from menu of your choice
       </p>
       <div className="explore-menu-list">
      {menu_list.map((item)=>{
        return (
          <div className="explore-menu-list-items">
              <li>{item.menu_name}</li>
              <img src={item.menu_image}/>
          </div>
      
      )
      })}
       </div>

    </div>
  )
}

export default ExploreMenu