// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store, with the values being the respective individual reducers;
export { default as allMeals} from "../store/utilities/allMeals";
export { default as meal} from "../store/utilities/meal";
export { default as allWorkouts} from "../store/utilities/allWorkouts";
export { default as workout} from "../store/utilities/workout";
export { default as user } from '../store/utilities/user';
export { default as profile } from '../store/utilities/profile';