
import React from 'react'
import './WatchScreen.scss'
import { Col, Row } from 'react-bootstrap'
import VideoWatch from '../../Components/VideoWatch/VideoWatch'
import VideoWatchSidebar from '../../Components/VideoWatchSideBar/VideoWatchSidebar'
import Comments from '../../Components/Comments/Comments'
import { useParams } from 'react-router-dom'

function WatchScreen() {
  const {id} = useParams()
  return (
    <Row>
      <Col lg={8}>
          <div className="watchScreen__player">
            <iframe  src={`https://www.youtube.com/embed/${id}`} frameborder="0" title="MY VIDEO"  allowFullScreen width={'100%'} height={'100%'} >

            </iframe>
          </div>

          <VideoWatch/>
          <Comments/>
      </Col>

      <Col lg={4} >
        {[...Array(10)].map(()=> <VideoWatchSidebar/>)  }
      </Col>
    </Row>
  )
}

export default WatchScreen
