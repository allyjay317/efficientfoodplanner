const defaultUser = {
  name: "Allison",
  recipeList: [
    {
      name: "Macaroni and Cheese",
      image:
        "https://www.seasonsandsuppers.ca/wp-content/uploads/2013/01/mac-cheese-3.jpg",
    },
    {
      name: "Orange Chicken",
      image:
        "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/10/32/15/W6FoUgXyRnaFTQjc1Nkw_0S9A2630.jpg",
    },
  ],
  mealPlan: ["Sesame Chicken", "Teriyaki Beef"],
  shoppingList: [
    { name: "Ground Beef", quantity: "1lb", price: 5.0 },
    { name: "Chicken", quantity: "1lb", price: 3.0 },
  ],
};

const accountReducer = (state = defaultUser, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default accountReducer;
