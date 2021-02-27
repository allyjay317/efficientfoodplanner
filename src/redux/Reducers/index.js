import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import recipeReducer from "./recipeReducer";

const root = combineReducers({
  user: accountReducer,
  recipe: recipeReducer,
});

export default root;
