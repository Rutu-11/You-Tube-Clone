import React, { useEffect } from "react";
import "./WatchScreen.scss";
import { Col, Row } from "react-bootstrap";
import VideoWatch from "../../Components/VideoWatch/VideoWatch";
import VideoWatchSidebar from "../../Components/VideoWatchSideBar/VideoWatchSidebar";
import Comments from "../../Components/Comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoById } from "../../Redux/Actions/Videos.Action";

function WatchScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selctedVideo);

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
        
        <Comments />
      </Col>

      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoWatchSidebar />
        ))}
      </Col>
    </Row>
  );
}

export default WatchScreen;
