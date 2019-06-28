import React from "react";
import "./search.css";
class Search extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input className="search" type="text" placeholder="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
