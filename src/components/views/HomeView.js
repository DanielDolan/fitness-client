import React from "react";
import "./styles/HomeView.css";
// import { Link } from "react-router-dom";
const HomeView = props => {
  return (

    <div className="home">
      <div class=" jumbotron jumbotron-fluid d-flex flex-column mb-0 align-items-center justify-content-left">
            <h1 class=" text-left m-4 display-4 bg-success text-white d-inline-block font-weight-normal  p-3 animated pulse infinite delay-5s">Conditioning and Cooking</h1>
          </div>
      <h4>An online planner to keep track of personal Fitness and Diet</h4>
      <br></br>
      <h5>Rated 10/10 by over 3 people!</h5>
      <h5>Join over 7 users today!</h5>
      <br></br>
      <h4>Each Workout and Meal Comes with step by step guide</h4>
      <br></br>
      <h3><u>3 Easy Steps </u></h3>
      <p>
        <b>1. </b>Signup for free <br>
        </br>
        <b>2. </b>Add Meals and Workouts based on your goals <br>
        </br>
        <b>3. </b> Check your Profile to see your saved Meals and Workouts
      </p>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <h5>Reviews:</h5>
      <br></br>
      <h6>"Cooking and Conditioning was essential for preparing me for my next role" - <b>Dwyane "The Rock" Johnson</b></h6>
      <br></br>
      <h6>"cool" - <b>Micheal Cera</b></h6>
      <br></br>
      <h6>"I would use it even if I wasnt being paid to write this!" - <b>Tom Holland</b></h6>
      <br></br>
      <h6>"Who are you?! how did you get in my house?!" - <b>Danny Devito</b></h6>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Using Edamam API and Team6 Workout API</p>

    </div>
  );
};

export default HomeView;