import axios from "axios";

//action types
const FETCH_ALL_MEALS = "FETCH_ALL_MEALS"

// action creators
const fetchAllMeals = meals => {
    return {
        type: FETCH_ALL_MEALS,
        payload: meals,
    }
}

const API_KEY = process.env.REACT_APP_API_KEY;
const API_ID = process.env.REACT_APP_API_ID;
const BASE_URL = "https://api.edamam.com/search"

// thunk creators
export const fetchAllMealsThunk = () => dispatch => {
    return axios.get(BASE_URL, {
        params: {
            q: "chicken",
            app_id: API_ID,
            app_key: API_KEY,
        }
    }).then(res => res.data.hits).then(recipes => {
        const meals = recipes.map(r => r.recipe)
        dispatch(fetchAllMeals(meals))
    })
        .catch(err => console.log(err))
}

// reducer
const reducer = (state = [], action) => {
    switch (action.type) {
      case FETCH_ALL_MEALS:
        return action.payload;
      default:
        return state;
    }
  }

  export default reducer;