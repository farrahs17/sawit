import React from "react";
import "./upvote.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Upvote extends React.Component {
  state = {
    upvote: 0,
    downvote: 0
  };
  componentDidMount() {}
  handleUpvoteClick = e => {
    axios.post("http://localhost:5000/upvote", {
      postId: this.props.postId
    });
  };
  handleDownvoteClick = e => {
    axios.post("http://localhost:5000/downvote", {
      postId: this.props.postId
    });
  };

  render() {
    return (
      <div className="upvote-container">
        <button className="upvote" onClick={this.handleUpvoteClick}>
          <i class="fas fa-chevron-up" />
        </button>
        <p className="upvote-text">{this.props.upvotes}</p>
        <button className="downvote" onClick={this.handleDownvoteClick}>
          <i class="fas fa-chevron-down" />
        </button>
      </div>
    );
  }
}

export default withRouter(Upvote);
