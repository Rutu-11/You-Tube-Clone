import React,{useEffect, useState} from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import request from "../../API";
import moment from "moment/moment";
import numeral from "numeral";

const Video = ({video}) => {
  //states for content related to videos
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);

  //states for content realated to channel
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();  // to implement duration stamp on videos
  const _duration = moment.utc(seconds*1000).format("mm:ss");

  // console.log("VV",video.snippet.thumbnails.medium.url)
  const {
    id,
    snippet: {
       channelId,
       channelTitle,
       title,
       publishedAt,
       thumbnails: { medium },
    },
    contentDetails,
 } = video;

//  to get statistical data
  useEffect(()=>{
    const get_video_details = async()=>{
     const{data:{items}} =  await request('/videos',{
      params:{
        part: "contentDetails, statistics",
        id:id,
      }
     })
     setDuration(items[0].contentDetails.duration);
     setViews(items[0].statistics.viewCount);
    //  console.log(items)
    }
    get_video_details();
  },[id])


  //to get channel icon
  useEffect(()=>{
    const get_channel_icon = async()=>{
     const{data:{items}} =  await request('/channels',{
      params:{
        part: "snippet",
        id:channelId,
      }
     })
     setChannelIcon(items[0].snippet.thumbnails.default)
    //  console.log(items)
    }
    get_channel_icon();
  },[channelId])


  return (
    <div className="video">
      <div className="video__top">
        <img src={medium.url} alt="" />
        <span>{_duration} </span>
      </div>
      <div className="video__title">
       {title}
      </div>
      <div className="video__details">
        <span>
        {/* //append number of views */}
          <AiFillEye /> {numeral(views).format("0.a")} Views •  
        </span>

        {/* To render the time after publication */}
        <span>{moment(publishedAt).fromNow()} </span>
      </div>
      <div className="video__channel">
        <img
          src= {channelIcon ?.url}
          alt=""
        />
        <p>{channelTitle} </p>
      </div>
    </div>
  );
};

export default Video;
