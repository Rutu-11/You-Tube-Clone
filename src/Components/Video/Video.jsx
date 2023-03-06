import React from 'react'
import "./_video.scss"
import {AiFillEye } from 'react-icons/ai'
const Video = () => {
  return (
    <div className='video'>
      <div className="video__top">
        <img src="https://i.ytimg.com/vi/mMReYUBgXOE/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDGxVaVlk998Ky_jCmL-GPndIAlGg" alt="" />
        <span>09:80</span>
      </div>
      <div className="video__title">
        Youtube-Clone #MyUTubeClone
      </div>
      <div className="video__details">
        <span>
            <AiFillEye/> 6m Views •
        </span>

        <span> 10 days ago</span>
      </div>
      <div className="video__channel">
        <img src="https://yt3.ggpht.com/a4AOsw2qHfuXAooYs7EMkwqJMmW_Wbqebpzm8Xmf2Rj_95QMLnAAFDNRNOJG-sSoairOXvQKrS8=s68-c-k-c0x00ffffff-no-rj" alt="" />
        <p>You-Tube-Clone</p>
      </div>
    </div>
  )
}

export default Video