import "./App.css";
import RecipePage from "./components/Recipe/RecipePage";
import User from "./components/User/User";

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

function App() {
  return (
    <div className="App">
      <User user={defaultUser} />
    </div>
  );
}

export default App;
