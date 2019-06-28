import React from "react";
import "../../popularpage/popularpage.css";
import "./post.css";
import moment from "moment";
import { Link } from "react-router-dom";

import PostOptions from "./postOptions/postOptions";
import Upvote from "./upvote/upvote";

function Post(props) {
  return (
    <div className="post-container">
      <div className="post">
        <div className="upvote-post">
          <Upvote />
        </div>
        <div className="post-content">
          <h3 className="post-title">{props.post.title}</h3>
          <p className="post-author">Posted by {props.post.username}</p>
          <p className="post-date">
            {moment(props.post.createdAt).format("MMMM Do YYYY, h:mm a")}
          </p>
          {props.post.imageUrl ? <img src={props.post.imageUrl} /> : ""}
          <p>{props.post.body}</p>
          <Link to={`post/${props.post._id}`}>
            <PostOptions />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
