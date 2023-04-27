import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {  getPopularVideos, getVideosByCategory } from '../../Redux/Actions/Videos.Action';
import "./_categories.scss";

const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
]


const Categoriesbar = () => {

  const [active , setActive] = useState("All");
  const dispatch = useDispatch();

  const handleClick = (ele)=>{
      setActive(ele);
      if(ele == "All"){
        dispatch(getPopularVideos());
      }
      else{
        dispatch(getVideosByCategory(ele))
      }
      // dispatch(getVideosByCategory(ele))
      
  }
  return (
    <div className='Categoriesbar' >
       {
        keywords.map((ele,ind)=>{
          return(
            <span key={ind}
            onClick={()=> handleClick(ele)}
            className={active === ele ? "active":"" }
             >{ele}
             </span>  //top Categories bar
          )
        })
       }
    </div>
  )
}

export default Categoriesbar