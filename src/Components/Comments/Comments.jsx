import React from 'react'
import "./Comments.scss"
import Comment from '../single_Comment/Comment'

function Comments() {
  const handleComments = ()=>{

  }
  return (
    <div className='comments' >
      <p>1234 Comments</p>
      <div className='my-2 comments__form d-flex w-100px' >

        <img src="https://www.shutterstock.com/image-vector/business-man-icon-600w-249914287.jpg" alt="" className='rounded-circle mr-3' />
        <form className='d-flex flex-grow-1' onSubmit={handleComments} >
          <input type='text' className='flex-grow-1' placeholder='write a comment...' />
          <button className='border-0 p-2' >Comment</button>
        </form>
        </div>
        
        <div className='comments__list'>
          {
            [...Array(15)].map(()=>(
              <Comment/>
            ))
          }
        </div>
      

    </div>
  )
}

export default Comments
