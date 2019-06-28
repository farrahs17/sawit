import React from "react";
import "./ad.css";

const ads = [
  "https://i.pinimg.com/564x/6b/37/9d/6b379df557e0a8b9cadb704d3c49c80a.jpg",
  "https://i.pinimg.com/236x/a7/10/03/a71003dbc36e32f6bb9a6c11dc8c799c.jpg",
  "https://i.pinimg.com/564x/8c/c8/5a/8cc85a9f5f248ab63a92f0368f95bf49.jpg"
];

class Ad extends React.Component {
  state = {
    pic: ""
  };

  componentDidMount() {
    this.adRandomizer(ads);
  }

  adRandomizer = ads => {
    const math = Math.floor(Math.random() * ads.length);
    return this.setState({ pic: ads[math] });
  };

  render() {
    return (
      <div className="ad-container">
        <img src={this.state.pic} alt="fake ad" />
      </div>
    );
  }
}

export default Ad;
