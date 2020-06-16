import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_WORKOUTS = "FETCH_ALL_WORKOUTS";

// ACTION CREATORS;
const fetchAllWorkouts = workouts => {
  return {
    type: FETCH_ALL_WORKOUTS,
    payload: workouts
  }
}

// THUNK CREATORS;
export const fetchAllWorkoutsThunk = () => dispatch => {
  return axios
    .get('/api/workouts')
    .then(res => res.data)
    .then(workouts => dispatch(fetchAllWorkouts(workouts)))
    .catch(err => console.log(err))
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