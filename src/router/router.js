import React from "react";
import { Switch, Route } from "react-router-dom";
import Postlist from "../popularpage/postList";
import PostDetails from "../postpage/postDetails";

function Router() {
  return (
    <router>
      <Switch>
        <Route exact path="/" component={Postlist} />
        <Route path="/post/:id" component={PostDetails} />
      </Switch>
    </router>
  );
}

export default Router;
