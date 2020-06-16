import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  AllWorkoutsContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" component={AllWorkoutsContainer} />

    </Switch>
  );
};
  
export default RoutesView;
  