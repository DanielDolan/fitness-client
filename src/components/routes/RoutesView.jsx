import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  AllWorkoutsContainer,
  WorkoutContainer, 
} from "../containers";
import AllMealsContainer from "../containers/meals/AllMealsContainer";
import SingleMealContainer from "../containers/meals/SingleMealContainer";
import { Login, Signup } from "../containers";
import ProfilePage from '../containers/ProfilePage';


const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/workouts" component={AllWorkoutsContainer} />
      <Route exact path="/workouts/:id" component={WorkoutContainer} />
      <Route exact path="/meals/:id" component={SingleMealContainer} />
      <Route exact path="/meals" component={AllMealsContainer} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/profile" component={ProfilePage}/>
    </Switch>
  );
};
  
export default RoutesView;
  
  
