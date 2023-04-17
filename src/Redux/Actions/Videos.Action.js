import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  RELATED_VIDEO_FAILED,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  SEARCH_VIDEO_FAILED,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAILED,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
} from "../ActionType";

import request from "../../API";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });

    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });
    // console.log("data", data);
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log("error1", error.message);
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
        part: "snippet",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: "video",
      },
    });
    // console.log("data", data);
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    console.log("error", error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_VIDEO_REQUEST,
    });

    const { data } = await request("/videos", {
      params: {
        part: "snippet, statistics",
        id: id,
      },
    });

    dispatch({
      type: SELECTED_VIDEO_SUCCESS,
      payload: data.items[0],
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SELECTED_VIDEO_FAILED,
      payload: err.message,
    });
  }
};

export const getRelatedVideos = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RELATED_VIDEO_REQUEST,
    });

    const { data } = await request("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 15,
        type: "video",
      },
    });

    dispatch({
      type: RELATED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (err) {
    console.log(err.response.data.message);
    dispatch({
      type: RELATED_VIDEO_FAILED,
      payload: err.response.data.message,
    });
  }
};


export const getVideosBySearch = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_VIDEO_REQUEST,
    });

    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        q: keyword,
        type: "video, channel",
      },
    });
    // console.log("data", data);
    dispatch({
      type: SEARCH_VIDEO_SUCCESS,
      payload: data.items
    });
  } catch (error) {
    console.log("error", error.message);
    dispatch({
      type: SEARCH_VIDEO_FAILED,
      payload: error.message,
    });
  }
};
