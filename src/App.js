import React from "react";
import Header from "./header/header";
import Post from "./popularpage/post/post";
import PostList from "./popularpage/postList";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
