import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Browse from "./views/Browse";
import Order from "./views/Order";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/browse" component={Browse} />
    <Route exact path="/order" component={Order} />
  </Switch>
);

export default Main;
