import React from "react";
import { Switch, Route } from "react-router-dom";
import Postlist from "../popularpage/postList";
import PostDetails from "../postpage/postDetails";
import Login from "../Login/login";
import CreatePostForm from "../createPostForm/createPostForm";
import SignUp from "../signUp/signUp";

function Router() {
  return (
    <router>
      <Switch>
        <Route exact path="/" component={Postlist} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreatePostForm} />
        <Route path="/post/:id" component={PostDetails} />
      </Switch>
    </router>
  );
}

export default Router;
