
import React from 'react'
import "./_header.scss";

import {FaBars} from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai';
import {AdNotifications, MdApps, MdNotifications} from 'react-icons/md'

const Header = ({handleSidebar}) => {
  return (
    <div className='border border-dark header' >
      <FaBars 
      className='header__menu' size={26}
      onClick={()=>handleSidebar()}

      />
      <img
      src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_1280.png"
      
      className='header__logo'
      alt="Y-Logo"
      />

      <form action="">
        <input type="text" placeholder='Search' />
        <button type='submit'>
          <AiOutlineSearch size={22}/>
        </button>
      </form>

      <div className='header__icons'>
        <MdNotifications  size={28} />

        
        <MdApps  size={28}/>
        <img src="https://www.shutterstock.com/image-vector/business-man-icon-600w-249914287.jpg" alt="avatar" />
      </div>
    </div>
  )
}

export default Header
