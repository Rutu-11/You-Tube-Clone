import request from "../../API"
import { CHANNEL_DETAILS_FAILED, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, GET_SUBSCRIPTION_STATUS } from "../ActionType"

export const getChannelDetails = (id)=>async (dispatch)=> {
    try{
        dispatch({
          type:CHANNEL_DETAILS_REQUEST
        })
  
     const {data} =  await request('/channels',{
          params:{
            part : 'snippet, statistics, contentDetails',
            id
          }
        })
  
        dispatch({
          type:CHANNEL_DETAILS_SUCCESS,
          payload: data.items[0]
        })
    }
    catch(err){
        console.log(err.response.data)
        dispatch({
          type: CHANNEL_DETAILS_FAILED,
          payload:err.response.data
        })
    }
  }


  export const checkSubscription = (id)=>async (dispatch, getState)=> {
    try{
     const {data} =  await request('/subscriptions',{
          params:{
            part : 'snippet',
            forChannelId : id,
            mine:true
          },
          headers: {
            Authorization: `Bearer ${getState().auth.accessToken}`,
         }
        })
  
        dispatch({
          type:GET_SUBSCRIPTION_STATUS,
          payload: data.items.length !== 0,
        })
        console.log("subscription", data)
    }
    catch(err){
        console.log("subscription",err.response.data)
        
    }
  }