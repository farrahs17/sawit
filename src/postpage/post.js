import React from "react";
import "../popularpage/popularpage.css";
import "../popularpage/post/post.css";
import "./post.css";
import moment from "moment";
import Axios from "axios";
import Upvote from "../popularpage/post/upvote/upvote";

class Post extends React.Component {
  state = {
    post: {}
  };
  componentDidMount() {
    console.log(this.props.postId);
    Axios.get(`http://localhost:5000/${this.props.postId}`)
      .then(res => {
        const postData = res.data.post;
        this.setState({
          post: {
            title: postData.title,
            username: postData.username,
            createdAt: postData.createdAt,
            imageUrl: postData.imageUrl,
            text: postData.text,
            upvotes: postData.upvotes
          }
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="postPage-container">
        <div className="post-postPage">
          <div className="upvote-post">
            <Upvote
              postId={this.props.postId}
              upvotes={this.state.post.upvotes}
            />
          </div>
          <div className="post-content">
            <h3 className="post-title">{this.state.post.title}</h3>
            <p className="post-author">Posted by {this.state.post.username}</p>
            <p className="post-date">
              {moment(this.state.post.createdAt).format("MMMM Do YYYY, h:mm a")}
            </p>

            {this.state.post.imageUrl ? (
              <img src={this.state.post.imageUrl} />
            ) : (
              ""
            )}

            <p>{this.state.post.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
