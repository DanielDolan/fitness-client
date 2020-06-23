import axios from 'axios';

// ACTION TYPES;
const ADD_EXERCISE = "ADD_EXERCISE";
const GET_EXERCISE = "GET_EXERCISE";

// ACTION CREATORS;
const add = user => {
  return {
    type: ADD_EXERCISE,
    payload: user
  }
}

const getExercise = userOfExercise => {
  return {
    type: GET_EXERCISE,
    payload: userOfExercise
  }
}

// THUNK CREATORS;
export const getAllExercise= (userID) => dispatch => {
  console.log("all workouts user id: ", userID)
  if(userID >= 0){
  return axios
    .get(`api/user/${userID}/exercise`)
    .then(res => res.data)
    .then(userOfExercise => dispatch(getExercise(userOfExercise)))
    .catch(err => console.log(err))
  }
  // tests
  // return dispatch(fetchAllWorkouts(allWorkouts));
}

export const addExercise = (userID, exerciseID) => async dispatch => {
  try {
    console.log("function called with userID:", userID, " and exerciseID: ", exerciseID);
    const res = await axios.post(`http://localhost:3001/api/user/addExercise`, {userID, exerciseID});
    console.log(res.data)
    return dispatch(add(res.data));
  }
  catch (err) {
    console.log(err)
    console.error(err);
  }
};

export const removeExercise = (userID, exerciseID) => async dispatch => {
  try {
    const res = await axios.delete(`http://localhost:3001/api/user/removeExercise`, {userID, exerciseID},{ withCredentials: true });
  }
  catch (err) {
    console.log(err)
    console.error(err);
  }
};

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_EXERCISE:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;