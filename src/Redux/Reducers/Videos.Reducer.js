import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../ActionType";

const initialState = {
    videos :[],
    loading : false,
    nextPageToken : null,
}
export const  homeVideoReducer = (state=initialState, {type, payload})=>{

    switch(type){
        case HOME_VIDEOS_SUCCESS:
        return{
            ...state,
            videos : payload.videos,
            loading:false,
            nextPageToken:payload.nextPageToken,
        }

        case HOME_VIDEOS_FAIL:
        return{
            ...state,
            loading:false,
            error:payload,
        }
        case HOME_VIDEOS_REQUEST:
        return{
            ...state,
            loading:true,
        }
        default:
        return state;
    }

}