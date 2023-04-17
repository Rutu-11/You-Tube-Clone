
import React, { useState } from 'react'
import "./_header.scss";

import {FaBars} from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai';
import { MdApps, MdNotifications} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const Header = ({handleSidebar}) => {

  const [input, setInput] = useState('');

  const navigate = useNavigate()
  const handleSubmit = (e)=>{
      e.preventDefault();

      navigate(`/search/${input}`)

  }
  const loggedInUser = JSON.parse(sessionStorage.getItem('U-tube-user'));
  // console.log('loggedInUser',loggedInUser)
  return (
    <div className='border border-dark header' >
      <FaBars 
      className='header__menu' size={26}
      onClick={()=>handleSidebar()}

      />
      <div className='header__div'>
      <img
      src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
      
      className='header__logo'
      alt="Y-Logo"
      /> 
      <span className='header__youTube'>YouTube</span>
      </div>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" placeholder='Search' value={input} onChange={(e)=>setInput(e.target.value)} />
        <button type='submit'>
          <AiOutlineSearch size={22}/>
        </button>
      </form>

      <div className='header__icons'>
        <MdNotifications  size={28} />

        
        <MdApps  size={28}/>
        {/* <img src="https://www.shutterstock.com/image-vector/business-man-icon-600w-249914287.jpg" alt="avatar" /> */}
        <img  src={loggedInUser ? loggedInUser.photo : "https://www.shutterstock.com/image-vector/business-man-icon-600w-249914287.jpg"} alt="avatar" />
      </div>
    </div>
  )
}

export default Header
