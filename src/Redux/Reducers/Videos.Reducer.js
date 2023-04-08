import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SELECTED_VIDEO_FAILED,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
} from "../ActionType";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: "All",
};
export const homeVideoReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "All",
  },
  { type, payload }
) => {
  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory == payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos, //for pagination
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };

    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};


export const selectedVideoReducer = (
  state = { loading: true, video: null },
  action
) => {
  const { payload, type } = action;

  switch(type){
    case SELECTED_VIDEO_REQUEST:
    return {
      ...state,
      loading:true,
    }

    case SELECTED_VIDEO_SUCCESS:
    return {
      ...state,
      video:payload,
      loading:false,
    }

    case SELECTED_VIDEO_FAILED:
    return{
      ...state,
      video:null,
      loading:false,
      error:payload

    }
    default:return state
  }
};
