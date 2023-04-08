import React, { useEffect } from "react";
import "./VideoWatchSidebar.scss";
import { AiFillEye } from "react-icons/ai";
import request from "../../API";
import moment from "moment/moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function VideoWatchSidebar({ video, searchScreen, subScreen }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
      resourceId,
    },
    // contentDetails,
  } = video;

  const isVideo = id.kind === "youtube#channel";

  //states for content related to videos
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);

  //states for content realated to channel
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds(); // to implement duration stamp on videos
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  //  to get statistical data
  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
      //  console.log(items)
    };
    get_video_details();
  }, [id]);

  //to get channel icon
  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
      //  console.log(items)
    };
    get_channel_icon();
  }, [channelId]);

  const _channelId = resourceId?.channelId || channelId;

  const navigate = useNavigate();
  const handleClick = () => {
    //! HandleChannelClick Remain
    navigate(`/watch/${id.videoId}`)
    // isVideo
    //   ? navigate(`/watch/${id.videoId}`)
    //   : navigate(`/channel/${_channelId}`);
  };

  const thumbnail = !isVideo && "videoHorizontal__thumbnail-channel";
  return (
    <Row
    className='py-2 m-1 videoHorizontal align-items-center'
    onClick={handleClick}>
    {/* //TODO refractor grid */}
    <Col
       xs={6}
       md={searchScreen || subScreen ? 4 : 6}
       className='videoHorizontal__left'>
       <LazyLoadImage
          src={medium.url}
          effect='blur'
          className={`videoHorizontal__thumbnail ${thumbnail} `}
          wrapperClassName='videoHorizontal__thumbnail-wrapper'
       />
       {isVideo && (
          <span className='videoHorizontal__duration'>{_duration}</span>
       )}
    </Col>
    <Col
       xs={6}
       md={searchScreen || subScreen ? 8 : 6}
       className='p-0 videoHorizontal__right'>
       <p className='mb-1 videoHorizontal__title'>{title}</p>

       {isVideo && (
          <div className='videoHorizontal__details'>
             <AiFillEye /> {numeral(views).format('0.a')} Views •
             {moment(publishedAt).fromNow()}
          </div>
       )}

       {(searchScreen || subScreen) && (
          <p className='mt-1 videoHorizontal__desc'>{description}</p>
       )}

       <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
          {isVideo && (
             <LazyLoadImage src={channelIcon?.url} effect='blur' />
          )}
          <p className='mb-0'>{channelTitle}</p>
       </div>
       {subScreen && (
          <p className='mt-2'>
             {video.contentDetails.totalItemCount} Videos
          </p>
       )}
    </Col>
 </Row>
  );
}

export default VideoWatchSidebar;
