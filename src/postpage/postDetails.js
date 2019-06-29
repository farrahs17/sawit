import React from "react";
import Comment from "../postpage/comment";
import Axios from "axios";
import Post from "../postpage/post";

class PostDetails extends React.Component {
  state = {
    comments: []
  };

  componentDidMount() {
    Axios.get(
      `http://localhost:5000/post-details/${this.props.match.params.id}`
    )
      .then(res => {
        console.log(res.data.comments[0].comments);
        this.setState({
          comments: res.data.comments[0].comments
        });
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong. Try again later");
      });
  }
  render() {
    return (
      <div>
        <Post postId={this.props.match.params.id} />
        <Comment postId={this.props.match.params.id} />
        <div className="comments">
          {this.state.comments.map(comment => {
            console.log(comment);
            return (
              <div className="comment">
                <h4>{comment.username && comment.username}</h4>
                <p>{comment.text && comment.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostDetails;
