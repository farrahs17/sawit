import React from "react";
import Axios from "axios";
import { getToken } from "../utils/utils";
import { withRouter } from "react-router-dom";
import "./post.css";
class Comment extends React.Component {
  state = {
    comment: ""
  };
  handleCommentChange = e => {
    const comment = e.target.value;
    this.setState({ comment: comment });
  };

  handleCommentSubmit = e => {
    e.preventDefault();
    Axios.post(
      "http://localhost:5000/new-comment",
      {
        text: this.state.comment,
        postId: this.props.postId
      },
      {
        headers: {
          Authorization: "Bearer " + getToken()
        }
      }
    )
      .then(res => {
        console.log(res);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
        alert("An error has occurred. Please try again");
      });
  };
  render() {
    return (
      <div>
        <div className="add-comment">
          <form onSubmit={this.handleCommentSubmit}>
            <textarea onChange={this.handleCommentChange} />
            <button>Add Comment</button>
          </form>
          <div />
        </div>
      </div>
    );
  }
}
export default withRouter(Comment);
