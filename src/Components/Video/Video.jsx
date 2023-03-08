import React,{useEffect} from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import request from "../../API";

const Video = (video) => {
  // const {
  //   id,
  //   snippet: {
  //     channelId,
  //     channelTitle,
  //     title,
  //     publishedAt,
  //     thumbnails: { medium },
  //   },
  // } = video;
  // console.log(video)

  useEffect(()=>{
    const get_video_details = async()=>{
     const{data:{items}} =  await request('/videos',{
      params:{
        part: "contentDetails, statisctics",
        // id:id,
      }
     })
    //  console.log(items)
    }
    get_video_details();
  },[])
  return (
    <div className="video">
      <div className="video__top">
        <img src="" alt="" />
        <span>09:80</span>
      </div>
      <div className="video__title">
        Its a dummy Youtube-Clone #MyYouTubeClone
      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 6m Views •
        </span>

        <span> 10 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/a4AOsw2qHfuXAooYs7EMkwqJMmW_Wbqebpzm8Xmf2Rj_95QMLnAAFDNRNOJG-sSoairOXvQKrS8=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>You-Tube-Clone</p>
      </div>
    </div>
  );
};

export default Video;
