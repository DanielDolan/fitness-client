import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  AllWorkoutsContainer,
  WorkoutContainer,
} from "../containers";
import AllMealsContainer from "../containers/meals/AllMealsContainer"
import SingleMealContainer from "../containers/meals/SingleMealContainer"

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/workouts" component={AllWorkoutsContainer} />
      <Route exact path="/workouts/:id" component={WorkoutContainer} />
      <Route exact path="/meals" component={AllMealsContainer} />
      <Route exact path="/meals/:id" component={SingleMealContainer} />
    </Switch>
  );
};
  
export default RoutesView;
  
  
