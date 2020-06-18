// import axios from "axios";

// Action Types
const FETCH_WORKOUT = "FETCH_WORKOUT";

// test data
// const allWorkouts = [
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
const fetchWorkout = (workout) => {
  return {
    type: FETCH_WORKOUT,
    payload: workout,
  };
};

// Thunk Creators
export const fetchWorkoutThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/exercises/${id}`)
    .then((res) => res.data)
    .then((workout) => dispatch(fetchWorkout(workout)))
    .catch((err) => console.log(err));

  // // tests
  // const workout = allWorkouts.find((c) => c.id === id);
  // return dispatch(fetchWorkout(workout));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WORKOUT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
