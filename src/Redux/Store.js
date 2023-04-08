import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./Reducers/Auth.Reducer";
import { homeVideoReducer } from "./Reducers/Videos.Reducer";
import { selectedVideoReducer } from "./Reducers/Videos.Reducer";
import { channelDetailReducer } from "./Reducers/Channer.reducer";
import { commentListReducer } from "./Reducers/Comment.reducer";

const rootReducer = combineReducers({
  auth : authReducer,
  homeVideos : homeVideoReducer,
  selctedVideo : selectedVideoReducer,
  channelDetails: channelDetailReducer,
  commentsList : commentListReducer
})
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;