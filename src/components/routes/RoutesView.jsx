import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  AllWorkoutsContainer,
  WorkoutContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/workouts" component={AllWorkoutsContainer} />
      <Route exact path="/workouts/:id" component={WorkoutContainer} />
    </Switch>
  );
};
  
export default RoutesView;
  