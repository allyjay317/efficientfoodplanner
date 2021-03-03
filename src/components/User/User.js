import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import UserHeader from "./UserHeader";
import UserMealPlan from "./UserMealPlan";
import UserRecipeList from "./UserRecipeList";
import UserShoppingList from "./UserShoppingList";

const User = () => {
  const user = useSelector((state) => state.user);
  return (
    <Grid container>
      <UserHeader name={user.name} />
      <Grid container xs={3}>
        <UserMealPlan mealPlan={user.mealPlan} />
        <UserShoppingList shoppingList={user.shoppingList} />
      </Grid>
      <Grid container xs={9}>
        <UserRecipeList
          recipeList={user.recipeList.personal}
          title="Your Recipes"
        />
        <UserRecipeList
          recipeList={user.recipeList.saved}
          title="Saved Recipes"
        />
      </Grid>
    </Grid>
  );
};

export default User;
