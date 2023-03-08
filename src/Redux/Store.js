import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./Reducers/Auth.Reducer";
import { homeVideoReducer } from "./Reducers/Videos.Reducer";



const rootReducer = combineReducers({
  auth : authReducer,
  homeVideos : homeVideoReducer,
})
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;