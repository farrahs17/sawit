import React from "react";

class PostDetails extends React.Component {
  render() {
    return (
      <div>
        <div className="Post" />
        <div className="add-comment">
          <form>
            <textarea />
            <button>Add Comment</button>
          </form>
        </div>
        <div className="comments" />
      </div>
    );
  }
}

export default PostDetails;
