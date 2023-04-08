import { CHANNEL_DETAILS_FAILED, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS } from "../ActionType";


export const channelDetailReducer = (
    state = { loading: true, channel: {} },
    action
  ) => {
    const { payload, type } = action;
  
    switch(type){
      case CHANNEL_DETAILS_REQUEST:
      return {
        ...state,
        loading:true,
      }
  
      case CHANNEL_DETAILS_SUCCESS:
      return {
        ...state,
        channel:payload,
        loading:false,
      }
  
      case CHANNEL_DETAILS_FAILED:
      return{
        ...state,
        channel:null,
        loading:false,
        error:payload
  
      }
      default:return state
    }
  };
  