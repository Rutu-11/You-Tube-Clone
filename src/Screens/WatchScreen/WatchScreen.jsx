import React, { useEffect } from "react";
import "./WatchScreen.scss";
import { Col, Row } from "react-bootstrap";
import VideoWatch from "../../Components/VideoWatch/VideoWatch";
import VideoWatchSidebar from "../../Components/VideoWatchSideBar/VideoWatchSidebar";
import Comments from "../../Components/Comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedVideos, getVideoById } from "../../Redux/Actions/Videos.Action";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function WatchScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));

    dispatch(getRelatedVideos(id))
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selctedVideo);

  const { videos, loading:relatedVideoLoading } = useSelector((state) => state.relatedVideos);
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width={"100%"}
            height={"100%"}
          ></iframe>
        </div>

      {

        !loading ?<VideoWatch video={video} videoId={id}/>: <h6>Loading...</h6>
      }
        
        <Comments videoId={id} totalComments={video?.statistics?.commentCount} />
      </Col>

      <Col lg={4}>
        {!loading ? videos?.filter(video=>video.snippet)
        .map((video) => (
          <VideoWatchSidebar video={video} key={video.id.videoId} />
        )):
        <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
             <Skeleton width={'100%'} height={'130px'} count={15} />
        </SkeletonTheme>
       
      }
      </Col>
    </Row>
  );
}

export default WatchScreen;
