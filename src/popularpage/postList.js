import React from "react";
import Post from "./post/post";
import axios from "axios";
import Ad from "../Ad/ad";

class PostList extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/")
      .then(response => {
        this.setState({
          posts: response.data.posts
        });
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="postList-container">
        {this.state.posts.map(post => {
          return <Post post={post} />;
        })}
        <Ad />
      </div>
    );
  }
}

export default PostList;
