import axios from "axios";

// Action Types
const FETCH_MEAL = "FETCH_MEAL";

// test data
// const workout = {
//   id: "1234567",
//   name: "test name",
//   imageUrl: "",
//   description: "test description",
// };

// const allMeals = [
//   {
//     id: "123",
//     name: "test workout name 1",
//     imageUrl: "https://via.placeholder.com/480x240?text=Placeholder",
//     description: "test workout description 1",
//     muscleGroup: "test muscle group 1",
//     recSets: 1,
//   },
//   {
//     id: "456",
//     name: "test workout name 2",
//     imageUrl: "https://via.placeholder.com/480x240?text=Placeholder",
//     description: "test workout description 2",
//     muscleGroup: "test muscle group 2",
//     recSets: 2,
//   },
// ];

// Action Creators
const fetchMeal = (meal) => {
  return {
    type: FETCH_MEAL,
    payload: meal,
  };
};

// Thunk Creators
export const fetchMealThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/meals/${id}`)
    .then((res) => res.data)
    .then((workout) => dispatch(fetchMeal(workout)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MEAL:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
