import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../ActionType";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory:"All",
};
export const homeVideoReducer = (state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: 'All',
  }, { type, payload }) => {
  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:state.activeCategory == payload.category ? [...state.videos, ...payload.videos] :  payload.videos, //for pagination
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category
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
