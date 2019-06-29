import React from "react";
import { Link } from "react-router-dom";
import "./createPost.css";
function CreatePost(params) {
  return (
    <div className="createPost-container">
      <Link to="/create">
        <button id="createPostBtn">Create Post</button>
      </Link>
    </div>
  );
}

export default CreatePost;
