import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_WORKOUTS = "FETCH_ALL_WORKOUTS";

// test data
const allWorkouts = [
  {
    id: "123",
    name: "test workout name 1",
    imageUrl: "https://via.placeholder.com/480x240?text=Placeholder",
    muscleGroup: "test muscle group 1",
    description: "test workout description 1",
  },
  {
    id: "456",
    name: "test workout name 2",
    imageUrl: "https://via.placeholder.com/480x240?text=Placeholder",
    muscleGroup: "test muscle group 2",
    description: "test workout description 2",
  },
];


// ACTION CREATORS;
const fetchAllWorkouts = workouts => {
  return {
    type: FETCH_ALL_WORKOUTS,
    payload: workouts
  }
}

// THUNK CREATORS;
export const fetchAllWorkoutsThunk = () => dispatch => {
  // return axios
  //   .get('/api/workouts')
  //   .then(res => res.data)
  //   .then(workouts => dispatch(fetchAllWorkouts(workouts)))
  //   .catch(err => console.log(err))
  return dispatch(fetchAllWorkouts(allWorkouts));
}

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_WORKOUTS:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;