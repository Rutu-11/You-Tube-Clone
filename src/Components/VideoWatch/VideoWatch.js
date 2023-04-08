import "./VideoWatch.scss";
import React, { useEffect } from "react";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import { checkSubscription, getChannelDetails } from "../../Redux/Actions/Channel.action";

export default function VideoWatch({
  video: { snippet, statistics },
  videoId,
}) {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  const dispatch = useDispatch()

  const { snippet: channelSnippet,
    statistics: channelStatistics,} = useSelector(state=>state.channelDetails.channel)
  useEffect(()=>{
      dispatch(getChannelDetails(channelId))
      dispatch(checkSubscription(channelId))
  },[dispatch, channelId])
  return (
    <div className="py-2 videoMetaData">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="py-1 d-flex justify-content-between align-items-center">
          <span>
            {/* //append number of views */}
            {numeral(viewCount).format("0.a")} Views •
            {/* To render the time after publication */}
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} /> {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>

      <div className='py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center'>
        <div className="d-flex">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            className='mr-3 rounded-circle'
            alt="channel_icon"
          />

          <div className="d-flex flex-column">
            <span >{channelTitle}</span>
            <span > {numeral(channelStatistics?.subscriberCount).format("0.a")} Subscribers </span>
          </div>
        </div>

        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>
      

      <div className="videoMetaData__description">
      <ShowMoreText
               lines={3}
               more='SHOW MORE'
               less='SHOW LESS'
               anchorClass='showMoreText'
               expanded={false}>
               {description}
            </ShowMoreText>
      </div>
    </div>
  );
}
