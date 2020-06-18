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

const apiKey = process.env.REACT_APP_API_KEY;
const apiID = process.env.REACT_APP_API_ID;
const mealsHome = "https://api.edamam.com/search?q=chicken&app_id="+apiID+"&app_key="+apiKey

// Thunk Creators
export const fetchMealThunk = (id) => (dispatch) => {
  // const urlString = `https://api.edamam.com/search?q=${searchTerm.replace(
  //   /\s/g,
  //   "+"
  // )}&app_id=${apiID}&app_key=${apiKey}`;

  return axios
    .get(`/api/meals/${id}`)
    .then((res) => res.data)
    .then((meal) => dispatch(fetchMeal(meal)))
    .catch((err) => console.log(err));

    // axios.get(mealsHome).then((result) => {
    //   this.setState({ meals: result.data.hits })
    // });
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
