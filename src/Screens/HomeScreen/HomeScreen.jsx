import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Categoriesbar from "../../Components/Categoriesbar/Categoriesbar";
import Video from "../../Components/Video/Video";
import { getPopularVideos } from "../../Redux/Actions/Videos.Action";

import './_HomeScreen.scss'


const HomeScreen = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPopularVideos())
  },[dispatch])

  const { videos, activeCategory, loading } = useSelector(
    state => state.homeVideos
 )
  

  

  // console.log("n", videos);
  return (
    <Container>
      <Categoriesbar />

      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4} >
            <Video key={video.id} video={video} />
          </Col>
        ))}
        {/* <Video /> */}
      </Row>
    </Container>
  );
};

export default HomeScreen;
