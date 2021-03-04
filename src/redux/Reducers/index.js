import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import recipeReducer from "./recipeReducer";
import mealPlanReducer from "./mealPlanReducer";

const root = combineReducers({
  user: accountReducer,
  recipe: recipeReducer,
  mealPlan: mealPlanReducer,
});

export default root;
