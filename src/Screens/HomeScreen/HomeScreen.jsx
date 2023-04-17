import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Categoriesbar from "../../Components/Categoriesbar/Categoriesbar";
import Video from "../../Components/Video/Video";
import { getPopularVideos } from "../../Redux/Actions/Videos.Action";
import InfiniteScroll from "react-infinite-scroll-component";
import { getVideosByCategory } from "../../Redux/Actions/Videos.Action";
import "./_HomeScreen.scss";
import SkeletonVideo from "../../Components/Skeleton/SkeletonVideo";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    //conditionnal redering for pagination
    // if(activeCategory === 'All'){
    //   dispatch(getPopularVideos())
    // }
    // else{
    dispatch(getVideosByCategory(activeCategory));
    // }
  };

  // console.log("n", videos);
  return (
    <Container>
      <Categoriesbar />
      {/* video compenet wrapped inside InfiniteScroll to get data automatically on reaching bottom of the page */}
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4}  >
                <Video key={video.id} video={video} />
              </Col>
            ))
          : [...Array(20)].map(() => (
             
              <Col lg={3} md={4}>
                <SkeletonVideo/>
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
