
import React from 'react'
import "./VideoWatchSidebar.scss"
import { AiFillEye } from "react-icons/ai";
import request from "../../API";
import moment from "moment/moment";
import numeral from "numeral";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from 'react-bootstrap';

function VideoWatchSidebar() {
  const seconds = moment.duration(100).asSeconds();  // to implement duration stamp on videos
  const _duration = moment.utc(seconds*1000).format("mm:ss");

  return (
    <Row className='py-2 m-1 videoHorizontal align-items-center' >
        <Col xs={6} md={4} className='videoHorizontal__left' >
        <LazyLoadImage src="https://www.shutterstock.com/image-vector/business-man-icon-600w-249914287.jpg" effect="blur" className='videoHorizontal__thumbnail'  wrapperClassName='videoHorizontal__thumbnail-wrapper' />
        <span className="video__top__duration" >{_duration} </span>
        </Col>

        <Col xs={6} md={8} className='videoHorizontal__right p-0' >
          <p className='mb-1 videoHorizontal__title'>Bea develpoer in one month</p>
          <div className='mt-1 videoHorizontal__details'>
         
        {/* //append number of views */}
          <AiFillEye /> {numeral(100000).format("0.a")} Views •  
        

        {/* To render the time after publication */}
       {moment('2022-08-15').fromNow()} 
          </div>

          <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
          {/* <LazyLoadImage src="https://www.shutterstock.com/image-vector/business-man-icon-600w-249914287.jpg" effect="blur"  /> */}
          <p>Code practice</p>
          </div>
        </Col>
    </Row>
  )
}

export default VideoWatchSidebar
