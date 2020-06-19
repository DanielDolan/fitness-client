import axios from "axios";

// Action Types
const FETCH_PROFILE = "FETCH_PROFILE";

// Action Creators
const fetchProfile = (profile) => {
  return {
    type: FETCH_PROFILE,
    payload: profile,
  };
};

// Thunk Creators
export const fetchProfileThunk = (id) => (dispatch) => {
  return axios
    //.get(`/api/user/${id}`)
    .get(`/api/user/1`)
    .then((res) => res.data)
    .then((profile) => dispatch(fetchProfile(profile)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
