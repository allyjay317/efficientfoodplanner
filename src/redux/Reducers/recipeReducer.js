const defaultRecipe = {
  name: "Macaroni",
  ingredients: [
    { quantity: "1 package", name: "Macaroni and Cheese" },
    { quantity: "1/4 cup", name: "Milk" },
    { quantity: "2tbsp", name: "Butter" },
  ],
  steps: [
    "Boil Water",
    "Dump Package of Macaroni and Cheese into Water and boil until done",
    "Drain Macaroni in a Collander",
    "Melt butter in pot",
    "Add Milk to pot",
    "Add drained Macaroni back into pot",
  ],
};

export const recipeReducer = (state = defaultRecipe, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
