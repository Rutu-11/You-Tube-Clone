
import React from 'react'
import moment from 'moment'
import './Comment.scss'
function Comment({comment}) {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    textDisplay,
 } = comment
  return (
    <div className='comment p-2 d-flex'>
         <img src={authorProfileImageUrl} alt="" className='rounded-circle mr-3' />
        <div className='comment__body'>
            <p className='mb-1 comment__header'>
                {authorDisplayName} • {moment(publishedAt).fromNow()}
            </p>
            <p className='mb-0'>{textDisplay}</p>
        </div>
    </div>
  )
}

export default Comment
