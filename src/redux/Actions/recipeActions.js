export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_STEPS = "UPDATE_STEPS";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";

export const updateName = (name) => (dispatch) => {
  dispatch({ type: UPDATE_NAME, payload: name });
};

export const updateSteps = (steps) => (dispatch) => {
  dispatch({ type: UPDATE_STEPS, payload: steps });
};

export const updateIngredients = (ingredients) => (dispatch) => {
  dispatch({ type: UPDATE_INGREDIENTS, payload: ingredients });
};
