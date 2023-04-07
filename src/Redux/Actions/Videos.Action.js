import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../ActionType";

import request from "../../API";


export const getPopularVideos = () => async (dispatch, getState) => {
  try {

    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });

    const { data } = await request("/videos", {
        params: {
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            regionCode: 'IN',
            maxResults: 20,
            pageToken: getState().homeVideos.nextPageToken,
      },
    });
     console.log("data",data);
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log('error1',error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};


export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
  try {

    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });

    const { data } = await request("/search", {
        params: {
            part: 'snippet',
            maxResults: 20,
            pageToken: getState().homeVideos.nextPageToken,
            q:keyword,
            type:"video",
      },
    });
    console.log("data",data);
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    console.log('error',error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
