import React from "react";
import "./upvote.css";

class Upvote extends React.Component {
  render() {
    return (
      <div className="upvote-container">
        <button className="upvote">^</button>
        <p className="upvote-text">Upvotes</p>
        <button className="downvote">v</button>
      </div>
    );
  }
}

export default Upvote;
