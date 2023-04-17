import React,{useEffect, useState} from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import request from "../../API";
import moment from "moment/moment";
import numeral from "numeral";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from "react-router-dom";
const Video = ({video}) => {

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

  //states for content related to videos
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);

  //states for content realated to channel
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();  // to implement duration stamp on videos
  const _duration = moment.utc(seconds*1000).format("mm:ss");

  
//  check if id is object and destructure accordingly
const _videoId = id?.videoId || contentDetails?.videoId || id

//  to get statistical data
  useEffect(()=>{
    const get_video_details = async()=>{
     const{data:{items}} =  await request('/videos',{
      params:{
        part: 'contentDetails,statistics',
        id:_videoId,
      }
     })
     setDuration(items[0].contentDetails.duration);
     setViews(items[0].statistics.viewCount)
    //  console.log(items)
    }
    get_video_details();
  },[_videoId])


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

  const navigate = useNavigate()
  const handleWatchScreen=()=>{
      navigate(`/watch/${_videoId}`)
  }

  return (
    <div className="video" onClick={handleWatchScreen} >
      <div className="video__top">
        {/* <img src={medium.url} alt="" /> */}
        <LazyLoadImage src={medium.url} effect="blur" />
        <span className="video__top__duration" >{_duration} </span>
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
        {/* <img
          src= {channelIcon ?.url}
          alt=""
        /> */}
        <LazyLoadImage src= {channelIcon?.url} alt="" effect="blur" />
        <p>{channelTitle} </p>
      </div>
    </div>
  );
};

export default Video;
