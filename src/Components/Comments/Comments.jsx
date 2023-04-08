import React, { useEffect ,useState} from 'react'
import "./Comments.scss"
import Comment from '../single_Comment/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../Redux/Actions/Comments.action';

function Comments({videoId}) {

  const [text, setText] = useState('')
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getCommentsOfVideoById(videoId))
  },[dispatch, videoId])

  const comments = useSelector(state=>state.commentsList.comments);
  const commentsData = comments?.map((comment=>comment.snippet.topLevelComment.snippet))
  const handleComments = (e)=>{
    e.preventDefault();
    if(text.length === 0) return
      dispatch(addComment(videoId,text))
  }
  return (
    <div className='comments' >
      <p>1234 Comments</p>
      <div className='my-2 comments__form d-flex w-100px' >

        <img src="https://www.shutterstock.com/image-vector/business-man-icon-600w-249914287.jpg" alt="" className='rounded-circle mr-3' />
        <form className='d-flex flex-grow-1' onSubmit={handleComments} >
          <input type='text' className='flex-grow-1' placeholder='write a comment...' value={text} onChange={e=>setText(e.target.value)} />
          <button className='border-0 p-2' >Comment</button>
        </form>
        </div>
        
        <div className='comments__list'>
          {
            commentsData?.map((comment, ind)=>(
              <Comment comment={comment} key={ind} />
            ))
          }
        </div>
      

    </div>
  )
}

export default Comments
