import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
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
      <UserRecipeList recipeList={user.recipeList} />
    </Grid>
  );
};

export default User;
