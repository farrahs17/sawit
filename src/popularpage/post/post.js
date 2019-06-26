import React from "react";
import "./post.css";

function Post(props) {
  return (
    <div className="post-container">
      <div className="post">
        <p>Posted by {props.post.username}</p>
        <p>{props.post.createdAt}</p>
        <h3>{props.post.title}</h3>
        <p>{props.post.body}</p>
      </div>
    </div>
  );
}

export default Post;
