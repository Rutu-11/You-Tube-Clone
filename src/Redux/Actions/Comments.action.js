import request from "../../API"
import { COMMENT_LIST_FAILED, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS } from "../ActionType"


export const getCommentsOfVideoById = (id)=>async (dispatch)=> {
    try{
        dispatch({
          type:COMMENT_LIST_REQUEST
        })
  
     const {data} =  await request('/commentThreads',{
          params:{
            part : 'snippet',
            videoId:id
          }
        })
  
        dispatch({
          type:COMMENT_LIST_SUCCESS,
          payload: data.items
        })
    }
    catch(err){
        console.log(err.response.data)
        dispatch({
          type: COMMENT_LIST_FAILED,
          payload:err.response.data.message
        })
    }
  }
