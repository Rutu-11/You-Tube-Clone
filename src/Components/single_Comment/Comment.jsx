
import React from 'react'
import moment from 'moment'
import './Comment.scss'
function Comment() {
  return (
    <div className='comment p-2 d-flex'>
         <img src="https://www.shutterstock.com/image-vector/business-man-icon-600w-249914287.jpg" alt="" className='rounded-circle mr-3' />
        <div className='comment__body'>
            <p className='mb-1 comment__header'>
                Rutu_D • {moment('2022-05-05').fromNow()}
            </p>
            <p className='mb-0'>Nice Video</p>
        </div>
    </div>
  )
}

export default Comment
