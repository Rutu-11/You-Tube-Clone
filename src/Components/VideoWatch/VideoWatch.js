import "./VideoWatch.scss";
import React from "react";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
export default function VideoWatch() {
  return (
    <div className="py-2 videoMetaData">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="py-1 d-flex justify-content-between align-items-center">
          <span>
            {/* //append number of views */}
            {numeral(10000).format("0.a")} Views •
            {/* To render the time after publication */}
            {moment("2020-06-6").fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(10000).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} /> {numeral(10000).format("0.a")}
            </span>
          </div>
        </div>
      </div>

      <div className="py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            src="https://www.shutterstock.com/image-vector/business-man-icon-600w-249914287.jpg"
            className="mr-3 rounded-circle"
          />

          <div className="d-flex flex-column">
            <span>Self Tutorial</span>
            <span> {numeral(10000).format("0.a")} Subscribers </span>
          </div>

          <button className="btn border-0 p-2 m-2">Subscribe</button>
        </div>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged
        </ShowMoreText>
      </div>
    </div>
  );
}
