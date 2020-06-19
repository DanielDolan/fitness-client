import axios from "axios";

// Action Types
const FETCH_MEAL = "FETCH_MEAL";

// Action Creators
const fetchMeal = (meal) => {
  return {
    type: FETCH_MEAL,
    payload: meal,
  };
};

const API_KEY = process.env.REACT_APP_API_KEY;
const API_ID = process.env.REACT_APP_API_ID;
const BASE_URL = "https://api.edamam.com/search"
const RECIPE_BASE = "http://www.edamam.com/ontologies/edamam.owl#recipe_"

// Thunk Creators
export const fetchMealThunk = (id) => (dispatch) => {
  console.log("id", id)
  return axios.get(BASE_URL, {
    params: {
      r: `${RECIPE_BASE}${id}`,
      app_id: API_ID,
      app_key: API_KEY,
    }
  }).then(res => res.data).then(recipe => {
    dispatch(fetchMeal(recipe[0]))
  })
    .catch(err => console.log(err))
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
