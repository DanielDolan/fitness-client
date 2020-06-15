import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

    </Switch>
  );
};
  
export default RoutesView;
  