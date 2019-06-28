import React from "react";
import "./createPostForm.css";

function CreatePostForm(props) {
  return (
    <div className="create-form">
      <form action="/create" method="POST">
        <label>
          Title
          <input type="text" id="title" name="title" />
        </label>
        <label>
          Link
          <input type="text" id="link" name="link" placeholder="(Optional)" />
        </label>
        <label>
          Text
          <textarea id="text" name="text" rows="15" />
        </label>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePostForm;
