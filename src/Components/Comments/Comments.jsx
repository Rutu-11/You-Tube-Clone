import React, { useEffect, useState } from "react";
import "./Comments.scss";
import Comment from "../single_Comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsOfVideoById,
} from "../../Redux/Actions/Comments.action";

function Comments({ videoId , totalComments }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentsList.comments);
  const [text, setText] = useState('')


  const commentsData = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );
  // const { photoURL } = useSelector(state => state.auth?.user)

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;

    dispatch(addComment(videoId, text));

    setText("");
  };
  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="my-2 comments__form d-flex w-100px">
        <img
          src="https://www.shutterstock.com/image-vector/business-man-icon-600w-249914287.jpg"
          alt=""
          className="rounded-circle mr-3"
        />
        <form className="d-flex flex-grow-1" onSubmit={handleComment}>
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="border-0 p-2">Comment</button>
        </form>
      </div>

      <div className="comments__list">
        {commentsData?.map((comment, ind) => (
          <Comment comment={comment} key={ind} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
