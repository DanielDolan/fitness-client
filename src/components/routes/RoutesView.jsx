import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  AllWorkoutsContainer,
  WorkoutContainer, 
  AuthFormContainer
} from "../containers";
import AllMealsContainer from "../containers/meals/AllMealsContainer"

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/workouts" component={AllWorkoutsContainer} />
      <Route exact path="/workouts/:id" component={WorkoutContainer} />
      <Route exact path="/meals" component={AllMealsContainer} />
      <Route exact path="/" component={AuthFormContainer} />
      {/* <Route exact path="/meals/:id" component={MealContainer} /> */}
    </Switch>
  );
};
  
export default RoutesView;
  
  
