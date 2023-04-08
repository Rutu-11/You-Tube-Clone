import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosBySearch } from "../../Redux/Actions/Videos.Action";
import { Container } from "react-bootstrap";
import VideoWatchSidebar from "../../Components/VideoWatchSideBar/VideoWatchSidebar";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function SearchScreen() {
  const { query } = useParams();
  console.log(query);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);

  const { videos, loading } = useSelector((state) => state.searchVideos);
  return (
    <Container>
      {!loading ? (
        videos?.map((video) => (
          <VideoWatchSidebar
            video={video}
            key={video.id.videoId}
            searchScreen
          />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width={"100%"} height={"160px"} count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
}

export default SearchScreen;
