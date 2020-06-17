// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// // import { fetchAllWorkoutsThunk } from '../../../thunks';

// import axios from "axios"
// import { AllMealsView } from '../../views';
// import "../../views/styles/meals/MealView.css";
// import SearchBar from "./SearchBar"
// import { debounce } from "lodash";

// const apiKey = process.env.REACT_APP_API_KEY;
// const apiID = process.env.REACT_APP_API_ID;
// const mealsHome = "https://api.edamam.com/search?q=chicken&app_id="+apiID+"&app_key="+apiKey

// // Smart container;
// class AllMealsContainer extends Component {
//   constructor() {
//     super();
//     this.state = {
//       meals: [],
//     };

//     this.handleTermChange = this.handleTermChange.bind(this);
//   }

//   componentDidMount() {
//     axios.get(mealsHome).then((result) => {
//       this.setState({ meals: result.data.hits});})
//   }

//   handleTermChange(searchTerm) {
//     const urlString = `https://api.edamam.com/search?q=${searchTerm.replace(
//       /\s/g,
//       "+"
//       )}&app_id=${apiID}&app_key=${apiKey}`;

//     if (searchTerm.length !== 0) {
//       axios.get(urlString).then((result) => {
//         this.setState({ meals: result.data.hits })
//       });
//     } 
//     else {
//       axios.get(mealsHome).then((result) => {
//         this.setState({ meals: result.data.hits })
//       });
//     }
//   }

//   render() {
//     // return <AllWorkoutsView allWorkouts={this.props.allWorkouts} />
//     return (
//       <>
//       <h1>Meal Search</h1>
//       {/* <SearchBar
//         style={{
//           fontSize: 24,
//           width: "40%",
//           paddingTop: 8,
//           paddingBottom: 8,
//           paddingLeft: 10,
//         }}
//         onTermChange={debounce(this.handleTermChange, 1000)}
//       /> */}
//       <AllMealsView allMeals={this.props.allMeals} />
//       {/* <MealContainer meals={this.state.meals} /> */}
//       </>

//     );
//   }
// }

// // // Map state to props;
// // const mapState = state => {
// //   return {
// //     allWorkouts: state.allWorkouts
// //   }
// // }

// // // Map dispatch to props;
// // const mapDispatch = dispatch => {
// //   return {
// //     fetchAllWorkouts: () => dispatch(fetchAllWorkoutsThunk())
// //   }
// // }

// // // Type check props;
// // AllWorkoutsContainer.propTypes = {
// //   allWorkouts: PropTypes.array.isRequired,
// //   fetchAllWorkouts: PropTypes.func.isRequired
// // }

// // Export our store-connected container by default;
// //export default connect(mapState, mapDispatch)(AllWorkoutsContainer);

// export default AllMealsContainer;