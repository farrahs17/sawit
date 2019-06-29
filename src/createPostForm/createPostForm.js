import React from "react";
import "./createPostForm.css";
import Axios from "axios";
import { getToken } from "../utils/utils";

class CreatePostForm extends React.Component {
  state = {
    title: "",
    imageUrl: "",
    text: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    Axios.post(
      "http://localhost:5000/new-post",
      {
        title: this.state.title,
        imageUrl: this.state.imageUrl,
        text: this.state.text
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

  handleTitleChange = e => {
    const title = e.target.value;
    this.setState({ title: title });
  };

  handleImageUrlChange = e => {
    const imageUrl = e.target.value;
    this.setState({ imageUrl: imageUrl });
  };
  handleTextChange = e => {
    const text = e.target.value;
    this.setState({ text: text });
  };
  render() {
    return (
      <div className="create-form">
        <form method="POST" onSubmit={this.handleSubmit}>
          <label>
            Post Title
            <input
              onChange={this.handleTitleChange}
              type="text"
              id="title"
              name="title"
            />
          </label>
          <label>
            Image Url
            <input
              onChange={this.handleImageUrlChange}
              type="text"
              id="link"
              name="link"
              placeholder="(Optional)"
            />
          </label>
          <label>
            Text
            <textarea
              onChange={this.handleTextChange}
              id="text"
              name="text"
              rows="15"
            />
          </label>
          <button>Create Post</button>
        </form>
      </div>
    );
  }
}

export default CreatePostForm;
